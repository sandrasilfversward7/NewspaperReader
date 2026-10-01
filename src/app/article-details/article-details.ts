import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news'; //To be able to fetch the article from API
import { Article } from '../interfaces/article';
import { Location } from '@angular/common'; // to be able to go back to main page

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css',
})

export class ArticleDetails {
    id: string | null; //Id answers the question "what article"
    article!: Article; //article shows "this article"

  constructor(
    private route: ActivatedRoute, 
    private newsService: NewsService,
    private location: Location,
    private cdr: ChangeDetectorRef ) { // to be able to connect this.route to activedRoute
      
      this.id = this.route.snapshot.paramMap.get('id'); // make sure id is taken from the article id 
      this.newsService.getArticle(this.id).subscribe(article => {
        this.article = article;
        this.cdr.markForCheck();
        console.log('Article from API:', article);
        console.log('Saved in this.article:', this.article);
      });
    }

    goBack(): void {
      this.location.back();
    }
}
