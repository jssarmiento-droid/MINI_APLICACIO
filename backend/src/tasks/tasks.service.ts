import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.task.findMany();
  }

  create(data: any) {
    return this.prisma.task.create({
      data,
    });
  }

  delete(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }

  update(id: number) {
    return this.prisma.task.update({
      where: { id },
      data: {
        completed: true,
      },
    });
  }
}