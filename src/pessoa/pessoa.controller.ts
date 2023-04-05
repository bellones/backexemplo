import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post
} from '@nestjs/common';
import { Public } from 'src/auth/common/decorations';
import { CreatePessoaDto, UpdatePessoaDto } from './dto';
import { PessoaService } from './pessoa.service';

@Controller('pessoa')
export class PessoaController {
  constructor(private pessoaService: PessoaService) {}
  @Get('list/:id')
  @HttpCode(HttpStatus.OK)
  list(@Param('id') id) {
    return this.pessoaService.list(id);
  }
  @Get('listId/:id')
  @HttpCode(HttpStatus.OK)
  listId(@Param('id') id) {
    return this.pessoaService.listId(id);
  }
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreatePessoaDto) {
    return this.pessoaService.createPessoa(dto);
  }

  @Public()
  @Post('createPerson')
  @HttpCode(HttpStatus.CREATED)
  createPerspon(@Body() dto: CreatePessoaDto) {
    return this.pessoaService.createPessoa(dto);
  }

  @Post('update')
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdatePessoaDto) {
    return this.pessoaService.updatePessoa(dto);
  }

  @Get('delete/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id) {
    return this.pessoaService.deletePessoa(id);
  }
}
