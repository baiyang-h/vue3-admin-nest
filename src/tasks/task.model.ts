export interface Task {
  id: string;          // 任务 ID
  title: string;       // 任务标题
  description: string; // 任务描述
  status: TaskStatus;  // 任务状态
}

export enum TaskStatus {
  OPEN = 'OPEN',       // 新建
  IN_PROGRESS = 'IN_PROGRESS', // 进行中
  DONE = 'DONE',       // 已完成
}
