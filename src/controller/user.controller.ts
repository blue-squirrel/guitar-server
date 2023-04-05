// src/controller/user.controller.ts
import { Inject, Controller, Query, Post, Body } from '@midwayjs/decorator';
import { User } from '../entity/user';
import { UserService } from '../service/user.service';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Controller('/api/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Post('/create', { description: '创建' })
  async create(@Body() user: User): Promise<User> {
    console.log(user, 88)
    Object.assign(user, {
      id: new Date().getTime(),
      regtime: new Date(),
      updaterId: 1,
      createrId: 1,
    });
    return this.userService.save(user);
  }

  @Post('/findById', { description: '通过主键查找' })
  async findById(@Query('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Post('/delete', { description: '删除' })
  async delete(@Query('id') id: number): Promise<DeleteResult> {
    return this.userService.delete(id);
  }
}
