import { ImageService } from './../shared/image.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];

  constructor(private _imageService: ImageService) { }

  ngOnInit() {
  }

  searchImages( query ) {
    this.images.  = this._imageService.getImages( query ).subscribe(
      data => console.log(data);
    );
  }

}
