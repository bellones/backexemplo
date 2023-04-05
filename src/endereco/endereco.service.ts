import { Injectable } from '@nestjs/common';
import { Endereco } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnderecoDto, UpdateEnderecoDto } from './dto';

@Injectable()
export class EnderecoService {
  constructor(private prisma: PrismaService) {}

  async list(idPessoa: string): Promise<Endereco[]> {
    const end = await this.prisma.endereco.findMany({
      where: {
        idPessoa: idPessoa,
        ativo: true,
      },
    });
    return end;
  }
  async listId(id: string): Promise<Endereco> {
    const end = await this.prisma.endereco.findUnique({
      where: {
        id: id,
      },
    });
    return end;
  }
  async listPrincipal(id: string): Promise<Endereco> {
    const end = await this.prisma.endereco.findFirst({
      where: {
        id: id,
        principal: true,
      },
    });
    return end;
  }

  async updateEnderecoPrincipal(
    id: string,
    principal: boolean,
  ): Promise<boolean> {
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

  async createEnd(dto: CreateEnderecoDto): Promise<boolean> {
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
  async updateEndereco(dto: UpdateEnderecoDto): Promise<boolean> {
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
  async deleteEndereco(id: string): Promise<boolean> {
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
}
