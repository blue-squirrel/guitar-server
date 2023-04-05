// src/entity/user.ts
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel('user')
export class User {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column({ length: 100, nullable: true })
  avatarUrl: string;

  @Column({ length: 20, unique: true })
  username: string;

  @Column({ length: 200 })
  password: string;

  @Column({ length: 20 })
  phoneNum: string;

  @Column()
  regtime: Date;

  @Column({ type: 'bigint' })
  updaterId: number;

  @Column({ type: 'bigint' })
  createrId: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @Column({ type: 'int', default: 1 })
  status: number;
}
