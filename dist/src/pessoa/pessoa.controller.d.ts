import { CreatePessoaDto, UpdatePessoaDto } from './dto';
import { PessoaService } from './pessoa.service';
export declare class PessoaController {
    private pessoaService;
    constructor(pessoaService: PessoaService);
    list(id: any): Promise<import(".prisma/client").Pessoa[]>;
    listId(id: any): Promise<import(".prisma/client").Pessoa>;
    create(dto: CreatePessoaDto): Promise<boolean>;
    createPerspon(dto: CreatePessoaDto): Promise<boolean>;
    update(dto: UpdatePessoaDto): Promise<boolean>;
    delete(id: any): Promise<boolean>;
}
