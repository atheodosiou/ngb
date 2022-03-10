import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ngb/dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ApiComponent
    }]),
    FormsModule,
    NgbDropdownModule
  ],
  declarations: [ApiComponent],
  exports:[ApiComponent]
})
export class ApiModule { }
