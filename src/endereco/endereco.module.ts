import { Module } from '@nestjs/common';
import { EnderecoController } from './endereco.controller';
import { EnderecoService } from './endereco.service';

@Module({
  providers: [EnderecoService],
  controllers: [EnderecoController],
})
export class EnderecoModule {}
