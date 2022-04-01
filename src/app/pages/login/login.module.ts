import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonUiModule } from 'src/app/shared/common-ui/common-ui.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,LoginRoutingModule,CommonUiModule
  ],
})
export class LoginModule { }
