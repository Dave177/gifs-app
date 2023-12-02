import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control" placeholder="buscar gifs..."
  (keyup.enter)="searchtag()"
  #txtTagInput>
  `

})
export class SearchBoxComponent {

  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchtag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
  }

}
