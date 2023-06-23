import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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


  login(): Observable<any> {
    const url = this.baseUrl + `/users/login`
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(url,
      {
        "user": {
          "email": "pedrogarrido971@gmail.com",
          "password": "pedro123"
        }
      },
      { headers }
    )
  }

  sendComment(text: string, token: string, slug: string) {
    const url = this.baseUrl + `/articles/${slug}/comments`;
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.post<any>(url,
      { comment: { body: text } },
      { headers }
    )
  }
}
