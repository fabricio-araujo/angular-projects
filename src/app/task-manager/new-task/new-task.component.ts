import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task.model'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  createTask(): void {
    if(this.taskForm.form.valid) {
      this.taskService.newTask(this.task);
      this.router.navigate(["/tasks"]);
    }
  }

}
