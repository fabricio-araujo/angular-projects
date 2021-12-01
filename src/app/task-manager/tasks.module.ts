import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from './shared/task.service';
import { TaskListComponent } from './list/task-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task/new-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DoneTaskDirective } from './shared/done-task.directive';



@NgModule({
  declarations: [
    TaskListComponent,
    NewTaskComponent,
    EditTaskComponent,
    DoneTaskDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
