import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @ViewChild('taskForm', { static:true }) taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.task = this.taskService.findById(id);
  }

  update():void {
    if(this.taskForm.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/tasks']);
    }
  }

}
