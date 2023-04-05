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
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PessoaService = class PessoaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(idEmpresa) {
        const pessoas = await this.prisma.pessoa.findMany({
            where: {
                empresaId: idEmpresa,
                ativo: true,
            },
        });
        return pessoas;
    }
    async listId(id) {
        const pessoa = await this.prisma.pessoa.findUnique({
            where: {
                id: id,
            },
        });
        return pessoa;
    }
    async createPessoa(dto) {
        let response;
        const newPessoa = await this.prisma.pessoa.create({
            data: {
                nome: dto.nome,
                ativo: true,
                dataAtualizado: null,
                dataCadastro: dto.dataCadastro,
                inscricaoEstadual: dto.inscricaoEstadual,
                inscricaoMunicipal: dto.inscricaoMunicipal,
                documento: dto.documento,
                isAdmin: dto.isAdmin,
                nascimento: dto.nascimento,
                tipoId: dto.tipoId,
                empresaId: dto.empresaId,
                nomeFantasia: dto.nomeFantasia,
                razaoSocial: dto.razaoSocial,
            },
        });
        newPessoa !== null ? (response = true) : (response = false);
        return response;
    }
    async updatePessoa(dto) {
        let response;
        const update = await this.prisma.pessoa.update({
            where: {
                id: dto.id,
            },
            data: {
                nome: dto.nome,
                ativo: dto.ativo,
                dataAtualizado: dto.dataAtualizado,
                dataCadastro: dto.dataCadastro,
                inscricaoEstadual: dto.inscricaoEstadual,
                inscricaoMunicipal: dto.inscricaoMunicipal,
                documento: dto.documento,
                isAdmin: dto.isAdmin,
                nascimento: dto.nascimento,
                tipoId: dto.tipoId,
                empresaId: dto.empresaId,
                nomeFantasia: dto.nomeFantasia,
                razaoSocial: dto.razaoSocial,
            },
        });
        update !== null ? (response = true) : (response = false);
        return response;
    }
    async deletePessoa(id) {
        let response;
        const remove = await this.prisma.pessoa.update({
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
PessoaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PessoaService);
exports.PessoaService = PessoaService;
//# sourceMappingURL=pessoa.service.js.map