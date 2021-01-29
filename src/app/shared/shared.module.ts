import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ButtonRendererComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
