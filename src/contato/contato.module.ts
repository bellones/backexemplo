import { Module } from '@nestjs/common';
import { ContatoController } from './contato.controller';
import { ContatoService } from './contato.service';

@Module({
  providers: [ContatoService],
  controllers: [ContatoController],
})
export class ContatoModule {}
