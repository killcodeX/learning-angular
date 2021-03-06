import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Task[]{
    return TASKS;
  }
}
