import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = "https://api.realworld.io/api";

  getTags() {
    const url = this.baseUrl + '/tags';
    return this.http.get<any>(url)
  }

  getArticles(tag: string) {
    const url = this.baseUrl + `/articles?tag=${tag}`;
    return this.http.get<any>(url)
  }
}
