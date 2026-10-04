//Component responsible for showing list of articles on mainpage, by retrieving from API through Newsservice.
//Filters articles by category or search text from navbar, 
//allows user to view, edit, delete the article, as well as
 

//Imports 
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Article } from '../interfaces/article';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './articles-list.html',
  styleUrl: './articles-list.css',
})

export class ArticlesList implements OnInit {
  articles: Article[] = [];
  message: string = ''; //Feedback messge

  constructor(
    private newsService: NewsService,
    private cdr: ChangeDetectorRef, //Updates the view when data changes
    private route: ActivatedRoute //Gives access to parameters in URL
  ) {}

  ngOnInit(): void {

    //Read category and search text
    this.route.queryParams.subscribe(params => {
      const category = params['category'] || ''; //No category selected by default
      const search = params['search'] || ''; //No search text by default

      //Get articles from API
      this.newsService.getArticles().subscribe({
        next: articles => {

          //Filter
          this.articles = articles
            .filter(a => !category || a.category === category)
            .filter(a => !search ||
              a.title.toLowerCase().includes(search.toLowerCase()) ||
              a.subtitle.toLowerCase().includes(search.toLowerCase()) ||
              a.abstract.toLowerCase().includes(search.toLowerCase())
            );
            
            this.cdr.markForCheck(); //Tell angular that view needs to be checked and updated
        },

        //Handle error from API
        error: err => {
          this.message = 'Error: ' + err.status;
          this.cdr.markForCheck();
        }
      });
    });
  }

  //Delete an article 
  deleteArticle(article: Article): void {
    if (confirm('Are you sure you want to delete this article?')) { //Confirmation message
      this.newsService.deleteArticle(article).subscribe(() => { //Deleted through Newsservice
        this.message = 'Article deleted successfully.';
        this.newsService.getArticles().subscribe(a => {
          this.articles = a;
          this.cdr.markForCheck();}); 
      });
    }
  }
}