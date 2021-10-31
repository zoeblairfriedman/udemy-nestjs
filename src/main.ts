// first file executed in any nest project
import { Controller, Module, Get} from '@nestjs/common'

// this is a decorator. we are creating a class that will be a controller. it will handle and route incoming requests.
@Controller()
class AppController {
  @Get()
  getRootRoute(){
    return 'hi there';
  }
}