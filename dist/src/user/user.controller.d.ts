import { CreateUserDto, UpdateUserDto } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    list(id: any): Promise<import(".prisma/client").User[]>;
    listId(id: any): Promise<import(".prisma/client").User>;
    create(dto: CreateUserDto): Promise<boolean>;
    update(dto: UpdateUserDto): Promise<boolean>;
    delete(id: any): Promise<boolean>;
}
