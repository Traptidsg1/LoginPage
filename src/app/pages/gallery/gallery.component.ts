import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryImageCard } from 'src/app/shared/models/gallery-image-card/gallery-image-card.model';
import { GalleryService } from 'src/app/shared/services/gallery.service';

@Component({
  selector: 'fx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  galleryData: GalleryImageCard[] = [];

  constructor(private router: Router, public galleryService: GalleryService) {
    this.galleryService
      .getAllPhotosByURL(5, 20)
      .subscribe((data: GalleryImageCard[]) => {
        console.log(data);
        this.galleryData = data;
      });
  }

  validateHome() {
    this.router.navigate(['/home']);
  }
}
