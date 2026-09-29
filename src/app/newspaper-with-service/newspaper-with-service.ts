import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../interfaces/article';
import { Highlight } from '../directives/highlight';
import { NewsService } from '../services/news';
import { FilterPipe } from '../pipes/filter-pipe';

@Component({
  selector: 'app-newspaper-with-service',
  imports: [FormsModule, CommonModule, Highlight, FilterPipe],
  templateUrl: './newspaper-with-service.html',
  styleUrl: './newspaper-with-service.css',
})

export class NewspaperWithService implements OnInit {
  article!: Article;
  articles!: Article[];
  message: string = "";
  term: string = "";
  selectedArticle: Article | undefined;

  @ViewChild('articleForm') articleForm: any; //referens till formuläret

  constructor(private newsService: NewsService) {//dependency injection
    this.article = {
      id: 0,
      title: "",
      subtitle: "",
      body: "",
      abstract: "",
      category: ""
    };
  }

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

  resetForm() {
    this.articleForm.reset();
  }

  publishArticle() {
  }

  viewArticle(id: number) {
  }
}