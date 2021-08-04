import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TASKS } from '../../mock-data';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks = TASKS;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTask()
  }
}
