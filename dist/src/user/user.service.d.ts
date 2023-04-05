import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    list(idEmpresa: string): Promise<User[]>;
    listId(id: string): Promise<User>;
    createUser(dto: CreateUserDto): Promise<boolean>;
    updateUser(dto: UpdateUserDto): Promise<boolean>;
    deleteUser(id: string): Promise<boolean>;
    hashData(data: string): Promise<string>;
}
