import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgbTableComponent],
  exports:[NgbTableComponent]
})
export class NgbTableModule { }
