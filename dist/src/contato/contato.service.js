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
exports.ContatoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContatoService = class ContatoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(idPessoa) {
        const contato = await this.prisma.contato.findMany({
            where: {
                idPessoa: idPessoa,
                ativo: true,
            },
        });
        return contato;
    }
    async listId(id) {
        const contato = await this.prisma.contato.findUnique({
            where: {
                id: id,
            },
        });
        return contato;
    }
    async createContato(dto) {
        let response;
        const newEnd = await this.prisma.contato.create({
            data: {
                descricao: dto.descricao,
                idPessoa: dto.idPessoa,
                ativo: true,
                idTipo: dto.idTipo,
            },
        });
        newEnd !== null ? (response = true) : (response = false);
        return response;
    }
    async updateContato(dto) {
        let response;
        const update = await this.prisma.contato.update({
            where: {
                id: dto.id,
            },
            data: {
                descricao: dto.descricao,
                idTipo: dto.idTipo,
            },
        });
        update !== null ? (response = true) : (response = false);
        return response;
    }
    async deleteContato(id) {
        let response;
        const remove = await this.prisma.contato.update({
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
};
ContatoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContatoService);
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map