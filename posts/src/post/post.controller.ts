import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Posts } from './../Entities/posts.entity';
import { ClientProxy } from '@nestjs/microservices';
import { Comment } from 'src/DTO/comment.dto';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    @Inject('POST_SERVICE') private readonly postClient: ClientProxy,
  ) {}

  @Post('createpost')
  async createPost(@Body() data: Posts) {
    const newdata = await this.postService.createPost(data);
    return newdata;
  }

  @Post('createComment')
  async createComment(@Body() data: Comment) {
    this.postClient.emit('comment', data);
    return data;
  }

  @Put('addLike/:id/:like')
  async addLike(@Param('id') id: number, @Param('like') like: number) {
    return await this.postService.addLike(id, like);
  }

  @Get('getposts')
  async getAllPosts() {
    return await this.postService.getAllPosts();
  }
}
