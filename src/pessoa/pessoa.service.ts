import { Injectable } from '@nestjs/common';
import { Pessoa } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePessoaDto, UpdatePessoaDto } from './dto';

@Injectable()
export class PessoaService {
  constructor(private prisma: PrismaService) {}

  async list(idEmpresa: string): Promise<Pessoa[]> {
    const pessoas = await this.prisma.pessoa.findMany({
      where: {
        empresaId: idEmpresa,
        ativo: true,
      },
    });
    return pessoas;
  }
  async listId(id: string): Promise<Pessoa> {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: {
        id: id,
      },
    });
    return pessoa;
  }

  async createPessoa(dto: CreatePessoaDto): Promise<boolean> {
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
  async updatePessoa(dto: UpdatePessoaDto): Promise<boolean> {
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
  async deletePessoa(id: string): Promise<boolean> {
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
}
