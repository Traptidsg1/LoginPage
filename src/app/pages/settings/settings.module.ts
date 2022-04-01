import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonUiModule } from 'src/app/shared/common-ui/common-ui.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,SettingsRoutingModule,CommonUiModule
  ],
})
export class SettingsModule { }
