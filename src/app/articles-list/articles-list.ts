import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Article } from '../interfaces/article';
import { RouterLink } from '@angular/router';
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
message: string = '';

constructor(private newsService: NewsService, private cdr: ChangeDetectorRef) {}

ngOnInit(): void {
  this.message = 'Loading...';
  this.newsService.getArticles().subscribe({
    next: articles => {
      this.articles = articles;
      this.message = '';
      this.cdr.detectChanges();
    },
    error: err => {
      this.message = 'Error: ' + err.status + ' ' + err.message;
      this.cdr.detectChanges();
    }
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

