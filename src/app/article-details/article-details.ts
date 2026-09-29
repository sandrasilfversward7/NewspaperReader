import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news'; //To be able to fetch the article from API
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css',
})

export class ArticleDetails {
    id: string | null; //Id answers the question "what article"
    article!: Article; //article shows "this article"

  constructor(private route: ActivatedRoute, private newsService: NewsService) { // to be able to connect this.route to activedRoute
    this.id = this.route.snapshot.paramMap.get('id'); // make sure id is taken from the article id 

    this.newsService.getArticle(this.id).subscribe(article => { //ask service to fetch article, subscribe "when it has arrived"
      console.log(article); //test to show that it works
      this.article = article; //when the article has arrived, save in article variable
    });
  }
}
