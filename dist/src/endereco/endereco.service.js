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
exports.EnderecoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EnderecoService = class EnderecoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(idPessoa) {
        const end = await this.prisma.endereco.findMany({
            where: {
                idPessoa: idPessoa,
                ativo: true,
            },
        });
        return end;
    }
    async listId(id) {
        const end = await this.prisma.endereco.findUnique({
            where: {
                id: id,
            },
        });
        return end;
    }
    async listPrincipal(id) {
        const end = await this.prisma.endereco.findFirst({
            where: {
                id: id,
                principal: true,
            },
        });
        return end;
    }
    async updateEnderecoPrincipal(id, principal) {
        let response;
        const update = await this.prisma.endereco.update({
            where: {
                id: id,
            },
            data: {
                principal: principal,
            },
        });
        update !== null ? (response = true) : (response = false);
        return response;
    }
    async createEnd(dto) {
        let response;
        const newEnd = await this.prisma.endereco.create({
            data: {
                bairro: dto.bairro,
                cep: dto.cep,
                cidade: dto.cidade,
                estado: dto.estado,
                local: dto.estado,
                idTipo: dto.idTipo,
                numero: dto.numero,
                complemento: dto.complemento,
                idPessoa: dto.idPessoa,
                principal: dto.principal,
            },
        });
        newEnd !== null ? (response = true) : (response = false);
        return response;
    }
    async updateEndereco(dto) {
        let response;
        const update = await this.prisma.endereco.update({
            where: {
                id: dto.id,
            },
            data: {
                bairro: dto.bairro,
                cep: dto.cep,
                cidade: dto.cidade,
                estado: dto.estado,
                local: dto.estado,
                idTipo: dto.idTipo,
                numero: dto.numero,
                complemento: dto.complemento,
                idPessoa: dto.idPessoa,
                principal: dto.principal,
            },
        });
        update !== null ? (response = true) : (response = false);
        return response;
    }
    async deleteEndereco(id) {
        let response;
        const remove = await this.prisma.endereco.update({
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
EnderecoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EnderecoService);
exports.EnderecoService = EnderecoService;
//# sourceMappingURL=endereco.service.js.map