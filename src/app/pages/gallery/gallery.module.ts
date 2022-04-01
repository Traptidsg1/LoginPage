import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonUiModule } from 'src/app/shared/common-ui/common-ui.module';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryRoutingModule,HttpClientModule, CommonUiModule],
  providers: [GalleryService]
})
export class GalleryModule {}
