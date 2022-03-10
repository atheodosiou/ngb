import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownComponent } from './dropdown.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideDirective } from '@ngb/api';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [NgbDropdownComponent, ClickOutsideDirective],
  exports: [NgbDropdownComponent]
})
export class NgbDropdownModule { }
