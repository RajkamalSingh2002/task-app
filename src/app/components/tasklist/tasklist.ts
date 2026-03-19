import { Component, signal } from '@angular/core';
import { TaskComponent, TaskType } from '../task/task';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.css']
})
export class Tasklist {
  tasks = signal<TaskType[]>([
    { id: 1, title: 'Learn Angular', description: 'Study Angular features and signals' },
    { id: 2, title: 'Build App', description: 'Create a small project using Angular' }
  ]);

  addTask(title: string, description: string) {
    if (!title.trim()) return;
    const currentTasks = this.tasks();
    const newTask: TaskType = {
      id: currentTasks.length + 1,
      title,
      description
    };
    this.tasks.set([...currentTasks, newTask]);
  }

  deleteTask(id: number) {
    this.tasks.set(this.tasks().filter(task => task.id !== id));
  }
}
