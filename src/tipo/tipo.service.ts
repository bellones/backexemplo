import { Tipo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTipoDto, UpdateTipoDto } from './dto';

export class TipoService {
  constructor(private prisma: PrismaService) {}
  async list(): Promise<Tipo[]> {
    const tipos = await this.prisma.tipo.findMany({
      where: {
        ativo: true,
      },
    });
    return tipos;
  }
  async listId(tipoId: string): Promise<Tipo[]> {
    const tipos = await this.prisma.tipo.findMany({
      where: {
        tipoId: tipoId,
        ativo: true,
      },
    });
    return tipos;
  }
  async createTipo(dto: CreateTipoDto): Promise<boolean> {
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
  async updateTipo(dto: UpdateTipoDto): Promise<boolean> {
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
  async deleteTipo(userId: string): Promise<boolean> {
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
