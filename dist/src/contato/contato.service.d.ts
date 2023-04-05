import { Contato } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContatoDto, UpdateContatoDto } from './dto';
export declare class ContatoService {
    private prisma;
    constructor(prisma: PrismaService);
    list(idPessoa: string): Promise<Contato[]>;
    listId(id: string): Promise<Contato>;
    createContato(dto: CreateContatoDto): Promise<boolean>;
    updateContato(dto: UpdateContatoDto): Promise<boolean>;
    deleteContato(id: string): Promise<boolean>;
}
