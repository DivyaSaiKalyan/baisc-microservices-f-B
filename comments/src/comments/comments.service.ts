import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './../Entities/comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private readonly commentsRepository: Repository<Comments>,
  ) {}

  async createComment(data: any) {
    const newdata = new Comments();
    newdata.comment = data.comment;
    newdata.postId = data.postId;
    return await this.commentsRepository.save(newdata);
  }

  async getAllComments() {
    return await this.commentsRepository.find();
  }

  async getCommentsById(postid: number) {
    return await this.commentsRepository.find({ postId: postid });
  }
}
