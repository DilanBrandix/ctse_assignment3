import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersPost } from '../model/post.interface';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  create(@Body() post: UsersPost): Observable<UsersPost> {
    return this.usersService.createPost(post);
  }
  @Get()
  findAll(): Observable<UsersPost[]> {
    return this.usersService.findAllPost();
  }
  @Put()
  update(@Body() post: UsersPost): Promise<any> {
    return this.usersService.updatePost(post);
  }
}
