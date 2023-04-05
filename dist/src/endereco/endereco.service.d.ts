import { Endereco } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnderecoDto, UpdateEnderecoDto } from './dto';
export declare class EnderecoService {
    private prisma;
    constructor(prisma: PrismaService);
    list(idPessoa: string): Promise<Endereco[]>;
    listId(id: string): Promise<Endereco>;
    listPrincipal(id: string): Promise<Endereco>;
    updateEnderecoPrincipal(id: string, principal: boolean): Promise<boolean>;
    createEnd(dto: CreateEnderecoDto): Promise<boolean>;
    updateEndereco(dto: UpdateEnderecoDto): Promise<boolean>;
    deleteEndereco(id: string): Promise<boolean>;
}
