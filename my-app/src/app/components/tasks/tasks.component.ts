import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TASKS } from '../../mock-data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks = [];
  taskId = ''
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks)

  }
  deleteTask(task: any){ //t.id == task.id
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t:any) => t.id !== task.id))
 }
  ngDoCheck() : void {
    this.tasks
  }
}
