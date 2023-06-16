import { Component } from '@angular/core';
import { TagsService } from './tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: TagsService) { }

  title = 'HTTP-Articles';
  tagList: any = [];
  articlesList: any = [];

  getTagList() {
    this.service.getTags();
    return this.service.tags;
  }

  showTags() {
    this.tagList = this.getTagList();
  }

  getArticlesList(tag: string) {
    this.service.getArticles(tag);
    this.articlesList = this.service.articles.slice(0, 5);
  }
}
