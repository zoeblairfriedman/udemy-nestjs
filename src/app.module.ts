import { Module } from '@nestjs/common'
import { AppController } from './app.controller'

//create a module about the app controller 
@Module({
  controllers: [AppController]
})


export class AppModule {}
