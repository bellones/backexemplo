import { Tipo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTipoDto, UpdateTipoDto } from './dto';
export declare class TipoService {
    private prisma;
    constructor(prisma: PrismaService);
    list(): Promise<Tipo[]>;
    listId(tipoId: string): Promise<Tipo[]>;
    createTipo(dto: CreateTipoDto): Promise<boolean>;
    updateTipo(dto: UpdateTipoDto): Promise<boolean>;
    deleteTipo(userId: string): Promise<boolean>;
}
