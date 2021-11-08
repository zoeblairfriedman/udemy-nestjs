// first file executed in any nest project
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core'



//define and invoke the bootstrap function, create an instance of our application and listen for incoming traffic
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(3000)
}

bootstrap();

// use this: npx ts-node-dev src/main.ts cause we built it from scratch