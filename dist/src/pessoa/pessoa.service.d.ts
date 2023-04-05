import { Pessoa } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePessoaDto, UpdatePessoaDto } from './dto';
export declare class PessoaService {
    private prisma;
    constructor(prisma: PrismaService);
    list(idEmpresa: string): Promise<Pessoa[]>;
    listId(id: string): Promise<Pessoa>;
    createPessoa(dto: CreatePessoaDto): Promise<boolean>;
    updatePessoa(dto: UpdatePessoaDto): Promise<boolean>;
    deletePessoa(id: string): Promise<boolean>;
}
