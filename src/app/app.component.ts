import { Component } from '@angular/core';
import { TagsService } from './tags.service';
import { catchError, finalize } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: TagsService) { }

  title = 'HTTP-Articles';
  tagList: Array<string> = [];
  articlesList: any = [];
  loading: boolean = false;
  errorMsj: string = '';
  lastTag: string = '';


  ngOnInit() {
    this.getTagList()
  }
  getTagList() {
    this.loading = true;
    this.service.getTags()
      .pipe(
        finalize(() => this.loading = false),
        catchError((error) => this.errorMsj = error.name))
      .subscribe(response => this.tagList = response.tags);
  }

  showTags() {
    this.getTagList();
  }

  getArticlesList(tag: string) {
    this.loading = true;
    this.lastTag = tag;
    this.service.getArticles(tag)
      .pipe(
        finalize(() => this.loading = false),
        catchError((error) => this.errorMsj = error.name))
      .subscribe(response => this.articlesList = response.articles.slice(0, 5));
  }


  cancelError() {
    this.errorMsj = '';
  }

  retry() {
    this.errorMsj = '';
    if (this.tagList.length == 0) {
      this.getTagList();
    }
    else {
      this.getArticlesList(this.lastTag);
    }
  }
}
