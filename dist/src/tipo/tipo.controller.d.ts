import { CreateTipoDto, UpdateTipoDto } from './dto';
import { TipoService } from './tipo.service';
export declare class TipoController {
    private tipoService;
    constructor(tipoService: TipoService);
    list(): Promise<import(".prisma/client").Tipo[]>;
    listId(id: any): Promise<import(".prisma/client").Tipo[]>;
    createTipo(dto: CreateTipoDto): Promise<boolean>;
    updateTipo(dto: UpdateTipoDto): Promise<boolean>;
    deleteTipo(id: any): Promise<boolean>;
}
