import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserPostEntity } from '../model/post.entity';
import { UsersPost } from '../model/post.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserPostEntity)
    private readonly userPostRepository: Repository<UserPostEntity>,
  ) {}
  createPost(userspost: UsersPost): Observable<UsersPost> {
    return from(this.userPostRepository.save(userspost));
  }

  findAllPost(): Observable<UsersPost[]> {
    return from(this.userPostRepository.find());
  }

  updatePost(userspost: UsersPost): Promise<any> {
    return this.userPostRepository.save(userspost);
  }
}
