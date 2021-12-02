import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoughtsAndCrossesComponent } from './noughts-and-crosses.component';
import { NoughtsAndCrossesService } from './shared/noughts-and-crosses.service';



@NgModule({
  declarations: [
    NoughtsAndCrossesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoughtsAndCrossesComponent
  ],
  providers: [
    NoughtsAndCrossesService
  ]
})
export class NoughtsAndCrossesModule { }
