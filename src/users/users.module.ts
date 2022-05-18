import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { UserPostEntity } from './model/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPostEntity])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
