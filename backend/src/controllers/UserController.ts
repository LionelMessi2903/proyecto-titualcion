import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { User } from '../models/User';
import { UserService } from '../services/UserService';
import { Observable } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Observable<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Observable<User | undefined> {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: User): Observable<User> {
    return this.userService.createUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: User): Observable<User> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Observable<any> {
    return this.userService.deleteUser(id);
  }
}
