import { Component, Input } from '@angular/core';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  constructor(private service: TagsService) { }

  @Input() article: any;

  commentList: any = [];




  comment(text: string) {
    this.service.login().subscribe(response => {
      this.service.sendComment(text, response.user.token, this.article.slug)
        .subscribe(response => this.commentList.push(response.comment))
    });
  }



}
