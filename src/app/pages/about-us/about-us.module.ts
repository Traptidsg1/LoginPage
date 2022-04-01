import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonUiModule } from 'src/app/shared/common-ui/common-ui.module';
import { AboutusRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,AboutusRoutingModule,CommonUiModule
  ],
})
export class AboutUsModule { }
