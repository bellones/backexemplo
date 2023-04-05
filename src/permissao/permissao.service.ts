import { Injectable } from '@nestjs/common';
import { Permissao } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissaoDto } from './dto';

@Injectable()
export class PermissaoService {
  constructor(private prisma: PrismaService) {}
  async list(idPessoa: string): Promise<Permissao[]> {
    const perm = await this.prisma.permissao.findMany({
      where: {
        idPessoa: idPessoa,
      },
    });
    return perm;
  }
  async createPermissao(dto: CreatePermissaoDto[]): Promise<boolean> {
    let response;
    const newPerms = this.prisma.permissao.createMany({
      data: dto,
    });

    newPerms !== null ? (response = true) : (response = false);
    return response;
  }
  async updatePermissao(dto: CreatePermissaoDto[]): Promise<boolean> {
    let response;
    const update = await this.prisma.permissao.updateMany({
      data: dto,
      where: {
        idPessoa: dto[0].idPessoa,
      },
    });
    update !== null ? (response = true) : (response = false);
    return response;
  }
}
