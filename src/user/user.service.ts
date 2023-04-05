import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async list(idEmpresa: string): Promise<User[]> {
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
  async listId(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }

  async createUser(dto: CreateUserDto): Promise<boolean> {
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
  async updateUser(dto: UpdateUserDto): Promise<boolean> {
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
  async deleteUser(id: string): Promise<boolean> {
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

  ///Helper Functions

  async hashData(data: string) {
    return await argon2.hash(data);
  }
}
