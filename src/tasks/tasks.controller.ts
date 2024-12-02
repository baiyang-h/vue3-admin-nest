import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // 获取所有任务
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  // 获取单个任务
  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  // 创建任务
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(title, description);
  }

  // 更新任务状态
  @Patch(':id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

  // 删除任务
  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}
