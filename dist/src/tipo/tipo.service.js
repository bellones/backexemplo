"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoService = void 0;
class TipoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list() {
        const tipos = await this.prisma.tipo.findMany({
            where: {
                ativo: true,
            },
        });
        return tipos;
    }
    async listId(tipoId) {
        const tipos = await this.prisma.tipo.findMany({
            where: {
                tipoId: tipoId,
                ativo: true,
            },
        });
        return tipos;
    }
    async createTipo(dto) {
        let response;
        const newTipo = await this.prisma.tipo.create({
            data: {
                nome: dto.nome,
                tipoId: dto.idTipo,
            },
        });
        newTipo !== null ? (response = true) : (response = false);
        return response;
    }
    async updateTipo(dto) {
        let response;
        const update = await this.prisma.tipo.update({
            where: {
                id: dto.id,
            },
            data: {
                nome: dto.nome,
            },
        });
        update !== null ? (response = true) : (response = false);
        return response;
    }
    async deleteTipo(userId) {
        let response;
        const remove = await this.prisma.tipo.update({
            where: {
                id: userId,
            },
            data: {
                ativo: false,
            },
        });
        remove !== null ? (response = true) : (response = false);
        return response;
    }
}
exports.TipoService = TipoService;
//# sourceMappingURL=tipo.service.js.map