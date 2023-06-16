import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  @Input() tag: string = '';
  @Output() tagClicked = new EventEmitter();

  getArticles(tag: string) {
    this.tagClicked.emit(tag);
  }

}
