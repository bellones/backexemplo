import { Permissao } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissaoDto } from './dto';
export declare class PermissaoService {
    private prisma;
    constructor(prisma: PrismaService);
    list(idPessoa: string): Promise<Permissao[]>;
    createPermissao(dto: CreatePermissaoDto[]): Promise<boolean>;
    updatePermissao(dto: CreatePermissaoDto[]): Promise<boolean>;
}
