// src/service/score.service.ts
import { Provide } from '@midwayjs/decorator';
import { Score } from '../entity/score';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Provide()
export class ScoreService {
  @InjectEntityModel(Score)
  scoreModel: Repository<Score>;

  async create(score: Score): Promise<Score> {
    return this.scoreModel.save(score);
  }

  async save(score: Score): Promise<Score> {
    return this.scoreModel.save(score);
  }

  async findAll(): Promise<any> {
    return this.scoreModel.find();
  }

  async findById(id: number): Promise<Score> {
    console.log(id)
    return this.scoreModel.findOneBy({ id });
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.scoreModel.delete(id);
  }
}
