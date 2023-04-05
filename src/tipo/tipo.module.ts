import { Module } from '@nestjs/common';
import { TipoController } from './tipo.controller';
import { TipoService } from './tipo.service';

@Module({
  providers: [TipoService],
  controllers: [TipoController],
})
export class TipoModule {}
