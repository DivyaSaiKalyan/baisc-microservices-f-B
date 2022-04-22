import { Controller, Get, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('getcomments')
  async getAllComments() {
    return await this.commentsService.getAllComments();
  }

  @EventPattern('comment')
  async createComments(data: any) {
    return await this.commentsService.createComment(data);
  }

  @Get('commentbyid/:postid')
  async getCommentsById(@Param('postid') postid: number) {
    return await this.commentsService.getCommentsById(postid);
  }
}
