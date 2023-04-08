// src/controller/user.controller.ts
import { Inject, Controller, Query, Post, Body, Get } from '@midwayjs/decorator';
import { Score } from '../entity/score';
import { ScoreService } from '../service/score.service';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import config from '../config/config.default';

@Controller('/api/score')
export class ScoreController {
  @Inject()
  scoreService: ScoreService;

  @Post('/upload', { description: '上传' })
  async create(@Body() score: Score): Promise<Score> {
    Object.assign(score, {
      regtime: new Date(),
      updaterId: 1,
      createrId: 1,
    });
    return this.scoreService.save(score);
  }

  @Get('/findAll', { description: '查找全部' })
    async findAll(): Promise<any> {
        const res = await this.scoreService.findAll();
        res.forEach(item => {
            item.scoreUrl = item.scoreUrl
                ? config.fileOs + item.scoreUrl
                : '';
        });
    return res;
  }

  @Get('/findById', { description: '通过主键查找' })
  async findById(@Query('id') id: number): Promise<any> {
    const score = await this.scoreService.findById(id);
    const scoreUrlList = score.scoreUrl.split(',').map(item => config.fileOs + item);
    return {
        ...score,
        scoreUrlList
    };
  }

//   @Post('/delete', { description: '删除' })
//   async delete(@Query('id') id: number): Promise<DeleteResult> {
//     return this.userService.delete(id);
//   }
}
