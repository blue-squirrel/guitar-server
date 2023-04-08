// src/entity/user.ts
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  CreateDateColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel('score')
export class Score {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ length: 20 })
  title: string;

  @Column({ length: 200, nullable: true })
  author: string;

  @Column({ length: 1024 })
  scoreUrl: string;

  @Column({ type: 'bigint', nullable: true })
  updaterId: number;

  @Column({ type: 'bigint', nullable: true })
  createrId: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}
