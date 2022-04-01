import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { IconsComponent } from './icons/icons.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ImageCardsComponent } from './image-cards/image-cards.component';
import { ImageSizeOptimizerPipe } from '../pipes/image-size-optimizer.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    InputBoxComponent,
    IconsComponent,
    NavbarComponent,
    ImageCardsComponent,
    ImageSizeOptimizerPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    LabelComponent,
    InputBoxComponent,
    NavbarComponent,
    IconsComponent,
    ImageCardsComponent,
  ],
})
export class CommonUiModule {}
