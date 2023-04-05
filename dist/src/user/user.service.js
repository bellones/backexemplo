"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const argon2 = require("argon2");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(idEmpresa) {
        const idList = [];
        const userIds = await this.prisma.userEmpresa.findMany({
            where: {
                idEmpresa: idEmpresa,
            },
            select: {
                id: true,
            },
        });
        userIds.map((id) => idList.push(id.id));
        const users = await this.prisma.user.findMany({
            where: {
                id: { in: [...idList] },
                ativo: true,
            },
        });
        return users;
    }
    async listId(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    }
    async createUser(dto) {
        let response;
        let empresaId;
        const idEmpresa = await this.prisma.pessoa.findFirst({
            where: {
                id: dto.idPessoa,
            },
            select: {
                empresaId: true,
            },
        });
        idEmpresa.empresaId !== null
            ? (empresaId = idEmpresa.empresaId)
            : (empresaId = null);
        const pass = await this.hashData(dto.password);
        const newUser = await this.prisma.user.create({
            data: {
                email: dto.email,
                password: pass,
                ativo: true,
                idPessoa: dto.idPessoa,
            },
        });
        const saveEmpresa = await this.prisma.userEmpresa.create({
            data: {
                idEmpresa: empresaId,
                idPessoa: dto.idPessoa,
            },
        });
        newUser && saveEmpresa !== null ? (response = true) : (response = false);
        return response;
    }
    async updateUser(dto) {
        let response;
        const pass = await this.hashData(dto.password);
        const update = await this.prisma.user.update({
            where: {
                id: dto.id,
            },
            data: {
                password: pass,
            },
        });
        update !== null ? (response = true) : (response = false);
        return response;
    }
    async deleteUser(id) {
        let response;
        const remove = await this.prisma.user.update({
            where: {
                id: id,
            },
            data: {
                ativo: false,
            },
        });
        remove !== null ? (response = true) : (response = false);
        return response;
    }
    async hashData(data) {
        return await argon2.hash(data);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map