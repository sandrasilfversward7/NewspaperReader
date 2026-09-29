import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../interfaces/article';
import { Highlight } from '../directives/highlight';
import { NewspaperLocalService } from '../services/newspaper-local-service';
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

  constructor(private newspaperService: NewspaperLocalService) { //dependency injection
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
    this.articles = this.newspaperService.getArticles(); //hämtar artiklarna från servicen och sparar dem i komponentens articles.
  }

  resetForm() {
    this.articleForm.reset();
  }

  publishArticle() {
    this.newspaperService.addArticle({ ...this.article });
    this.message = `The article[${this.article.title}] has been published`;
    this.articleForm.reset();
  }

  viewArticle(id: number) {
    this.selectedArticle = this.newspaperService.getArticle(id);
  }
}