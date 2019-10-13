import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { InputComponent } from 'app/components/shared/input/input.component';
import { RadioComponent } from 'app/components/shared/radio/radio.component';
import { RatingComponent } from 'app/components/shared/rating/rating.component';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
