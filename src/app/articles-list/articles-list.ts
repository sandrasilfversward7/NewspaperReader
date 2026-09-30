import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Article } from '../interfaces/article';
import { RouterLink } from '@angular/router';
import { NewsService } from '../services/news';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-articles-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './articles-list.html',
  styleUrl: './articles-list.css',
})
export class ArticlesList implements OnInit {
  articles: Article[] = [];
message: string = '';

constructor(private newsService: NewsService, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const category = params['category'] || '';
    const search = params['search'] || '';
    this.newsService.getArticles().subscribe({
      next: articles => {
        this.articles = articles
          .filter(a => !category || a.category === category)
          .filter(a => !search || a.title.toLowerCase().includes(search.toLowerCase()));
        this.cdr.detectChanges();
      },
      error: err => {
        this.message = 'Error: ' + err.status;
        this.cdr.detectChanges();
      }
    });
  });
}


deleteArticle(article: Article): void {
  if (confirm('Are you sure you want to delete this article?')) {
    this.newsService.deleteArticle(article).subscribe(() => {
      this.message = 'Article deleted successfully.';
      this.newsService.getArticles().subscribe(a => this.articles = a);
    });
  }
}}

