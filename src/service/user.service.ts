// src/service/user.service.ts
import { Provide } from '@midwayjs/decorator';
import { User } from '../entity/user';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async create(user: User): Promise<User> {
    return this.userModel.save(user);
  }

  async save(user: User): Promise<User> {
    return this.userModel.save(user);
  }

  async findById(id: number): Promise<User> {
    return this.userModel.findOneBy({ id });
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.userModel.delete(id);
  }
}
