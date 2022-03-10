import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesComponent } from './examples.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ExamplesComponent
    }])
  ],
  declarations: [ExamplesComponent],
  exports: [ExamplesComponent]
})
export class ExamplesModule { }
