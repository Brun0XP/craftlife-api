import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';
import { AppModule } from './app.module';

async function bootstrap() {
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();
  const app = await NestFactory.create(
    AppModule,
    { cors: true }
  );
  
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
}
bootstrap();
