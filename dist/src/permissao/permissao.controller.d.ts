import { CreatePermissaoDto, UpdatePermissaoDto } from './dto';
import { PermissaoService } from './permissao.service';
export declare class PermissaoController {
    private permissaoService;
    constructor(permissaoService: PermissaoService);
    list(id: any): Promise<import(".prisma/client").Permissao[]>;
    createTipo(dto: CreatePermissaoDto[]): Promise<boolean>;
    updateTipo(dto: UpdatePermissaoDto[]): Promise<boolean>;
}
