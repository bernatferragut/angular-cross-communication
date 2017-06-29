import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound: boolean = false;

  constructor(private _imageService: ImageService) { }

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(data) {
    console.log(data.error);
  }

  searchImages(query: string) {
    return this._imageService.getImages(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => console.log('Request Completed!'),
      
    )
  }

  ngOnInit() {
  }
}
