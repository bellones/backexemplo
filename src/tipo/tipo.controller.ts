import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common';
import { CreateTipoDto, UpdateTipoDto } from './dto';
import { TipoService } from './tipo.service';

@Controller('tipo')
export class TipoController {
  constructor(private tipoService: TipoService) {}

  @Get('list')
  @HttpCode(HttpStatus.OK)
  list() {
    return this.tipoService.list();
  }

  @Get('listId/:id')
  @HttpCode(HttpStatus.OK)
  listId(@Param('id') id) {
    return this.tipoService.listId(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createTipo(@Body() dto: CreateTipoDto) {
    return this.tipoService.createTipo(dto);
  }

  @Post('update')
  @HttpCode(HttpStatus.OK)
  updateTipo(@Body() dto: UpdateTipoDto) {
    return this.tipoService.updateTipo(dto);
  }

  @Get('delete/:id')
  @HttpCode(HttpStatus.OK)
  deleteTipo(@Param('id') id) {
    return this.tipoService.deleteTipo(id);
  }
}
