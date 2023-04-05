import { CreateEnderecoDto, UpdateEnderecoDto } from './dto';
import { UpdateEnderecoPrincipalDto } from './dto/update.end.principal.dto';
import { EnderecoService } from './endereco.service';
export declare class EnderecoController {
    private enderecoService;
    constructor(enderecoService: EnderecoService);
    list(id: any): Promise<import(".prisma/client").Endereco[]>;
    listId(id: any): Promise<import(".prisma/client").Endereco>;
    listPrincipal(id: any): Promise<import(".prisma/client").Endereco>;
    updateEnderecoPrincipal(dto: UpdateEnderecoPrincipalDto): Promise<boolean>;
    create(dto: CreateEnderecoDto): Promise<boolean>;
    update(dto: UpdateEnderecoDto): Promise<boolean>;
    delete(id: any): Promise<boolean>;
}
