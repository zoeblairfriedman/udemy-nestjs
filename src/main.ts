// first file executed in any nest project
import { Controller, Module, Get} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

// this is a decorator. we are creating a class that will be a controller. it will handle and route incoming requests.
@Controller()
class AppController {
  @Get()
  getRootRoute(){
    return 'hi there';
  }
}

//create a module about the app controller 
@Module({
  controllers: [AppController]
})


class AppModule {}

//define and invoke the bootstrap function, create an instance of our application and listen for incoming traffic
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(3000)
}

bootstrap();

// use this: npx ts-node-dev src/main.ts cause we built it from scratch