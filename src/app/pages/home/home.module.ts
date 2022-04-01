import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonUiModule } from 'src/app/shared/common-ui/common-ui.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
   HomeComponent
  ],
  imports: [
    CommonModule,HomeRoutingModule,CommonUiModule
  ],
})
export class HomeModule { }
