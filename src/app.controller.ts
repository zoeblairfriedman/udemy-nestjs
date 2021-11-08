import { Controller, Get} from '@nestjs/common'


// this is a decorator. we are creating a class that will be a controller. it will handle and route incoming requests.
@Controller()
export class AppController {
  @Get()
  getRootRoute(){
    return 'hi there';
  }
}
