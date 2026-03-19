import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TaskType {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class TaskComponent {
  @Input() task!: TaskType;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
