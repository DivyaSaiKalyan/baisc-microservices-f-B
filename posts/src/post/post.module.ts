import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from 'src/Entities/posts.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts]),
    ClientsModule.register([
      { name: 'POST_SERVICE', transport: Transport.TCP },
    ]),
  ],

  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
