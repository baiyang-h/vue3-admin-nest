import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid'; // 用于生成唯一 ID

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // 存储任务的数组

  // 获取所有任务
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // 根据 ID 获取任务
  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  // 创建任务
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(), // 生成唯一 ID
      title,
      description,
      status: TaskStatus.OPEN, // 默认状态
    };
    this.tasks.push(task);
    return task;
  }

  // 更新任务状态
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  // 删除任务
  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
