import { Component, OnInit } from '@angular/core';
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

constructor(private newsService: NewsService) {}

ngOnInit(): void {
  this.newsService.getArticles().subscribe(articles => {
    console.log(articles);
    this.articles = articles;
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

