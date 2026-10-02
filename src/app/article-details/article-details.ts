//Component responsible for showing details of one article
//reads ID from URL, retrieves the article through NewsService
//allows the user to go back to the previous page

import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news'; 
import { Article } from '../interfaces/article';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css',
})

export class ArticleDetails {
  id: string | null; //Id of article taken from URL
  article!: Article; 

  constructor(
    private route: ActivatedRoute, 
    private newsService: NewsService,
    private location: Location, //Used to go back to previous page
    private cdr: ChangeDetectorRef 
  ) { 
      
     // Get article ID from URL
    this.id = this.route.snapshot.paramMap.get('id');

    //Get article from API
      this.newsService.getArticle(this.id).subscribe(article => {
        this.article = article;
        this.cdr.markForCheck();
      });
    }

  //Go back to previous page
  goBack(): void {
      this.location.back();
    }
}
