import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParamDto } from './dto/param.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 200 })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200 })
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200 })
  @Get('/:id')
  getUser(@Param() param: ParamDto) {
    return this.usersService.getUserById(param.id);
  }

  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  delete(@Param() param: ParamDto) {
    return this.usersService.deleteUserById(param.id);
  }
}
