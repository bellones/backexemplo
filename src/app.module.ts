import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AtGuard } from './auth/common/guards';
import { ContatoModule } from './contato/contato.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PermissaoModule } from './permissao/permissao.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { PrismaModule } from './prisma/prisma.module';
import { TipoModule } from './tipo/tipo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    TipoModule,
    EnderecoModule,
    ContatoModule,
    PermissaoModule,
    UserModule,
    PessoaModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
