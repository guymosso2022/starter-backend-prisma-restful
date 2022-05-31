import { Module } from '@nestjs/common';
import * as controllers from './controllers';
import * as services from './services';
import { PrismaModule } from './utils/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [...Object.values(controllers)],
  providers: [...Object.values(services)],
})
export class AppModule {}
