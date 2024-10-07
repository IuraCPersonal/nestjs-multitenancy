import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenancyModule } from './tenancy/tenancy.module';

@Module({
  imports: [TenancyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
