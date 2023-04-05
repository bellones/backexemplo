import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('list/:id')
  @HttpCode(HttpStatus.OK)
  list(@Param('id') id) {
    return this.userService.list(id);
  }
  @Get('listId/:id')
  @HttpCode(HttpStatus.OK)
  listId(@Param('id') id) {
    return this.userService.listId(id);
  }
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Post('update')
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateUserDto) {
    return this.userService.updateUser(dto);
  }

  @Get('delete/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id) {
    return this.userService.deleteUser(id);
  }
}
