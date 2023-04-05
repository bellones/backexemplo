import { ContatoService } from './contato.service';
import { CreateContatoDto, UpdateContatoDto } from './dto';
export declare class ContatoController {
    private contatoService;
    constructor(contatoService: ContatoService);
    list(id: any): Promise<import(".prisma/client").Contato[]>;
    listId(id: any): Promise<import(".prisma/client").Contato>;
    createTipo(dto: CreateContatoDto): Promise<boolean>;
    updateTipo(dto: UpdateContatoDto): Promise<boolean>;
    deleteTipo(id: any): Promise<boolean>;
}
