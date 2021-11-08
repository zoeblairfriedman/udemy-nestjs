import { Controller, Get} from '@nestjs/common'


// this is a decorator. we are creating a class that will be a controller. it will handle and route incoming requests.
@Controller('/app')
export class AppController {
  @Get('/asdf')
  getRootRoute(){
    return 'bye there';
  }

  @Get("/hi")
  getHeyThere() {
    return 'hey there!'
  }
}
