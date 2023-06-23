import { Module } from '@nestjs/common';
import { HeroModule } from './core/infrastructure/nest/hero/hero.module';

@Module({
  imports: [HeroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
