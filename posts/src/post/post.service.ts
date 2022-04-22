import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/Entities/posts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Posts) private readonly postRepository: Repository<Posts>,
  ) {}

  async createPost(data: Posts) {
    const post = new Posts();
    const newData = Object.assign(post, data);
    return await this.postRepository.save(newData);
  }

  async addLike(id: number, like: number) {
    const getOne = await this.postRepository.update(
      { id: id },
      { likes: like },
    );
    return getOne;
  }

  async getAllPosts(): Promise<Posts[]> {
    return await this.postRepository.find();
  }
}
