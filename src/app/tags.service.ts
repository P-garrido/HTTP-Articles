import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  tags: any = [];
  articles: any = [];
  readonly baseUrl = "https://api.realworld.io/api";

  getTags() {
    const url = this.baseUrl + '/tags';
    this.http.get<any>(url)
      .pipe(catchError(error => { return ["Error"] }))
      .subscribe(response => this.tags = response.tags)
  }

  getArticles(tag: string) {
    const url = this.baseUrl + `/articles?tag=${tag}`
    this.http.get<any>(url)
      .pipe(catchError(error => { return ["Error"] }))
      .subscribe(response => this.articles = response.articles)
  }
}
