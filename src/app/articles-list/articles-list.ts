import { Component, ViewChild, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../directives/highlight';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articles-list',
  imports: [FormsModule, Highlight, CommonModule],
  templateUrl: './articles-list.html',
  styleUrl: './articles-list.css',
})
export class ArticlesList implements OnInit {
  article: Article; 
  articles: Article[];
  message: string = "";

  @ViewChild('articleForm') articleForm: any; 
  constructor() {  
    this.article = { //variablen som tillhör den här komponenten
    id: 0, //tillagd för excersie 3 
    title: "",
    subtitle: "",
    body: "",
    abstract: "",
    category: ""
    };

    this.articles = [
      {
        id: 1,
        title: "Article 1",
        subtitle: "Subtitle 1",
        abstract: "Abstract 1",
        body: "",
        category: "National"
      },
      {
        id: 2, 
        title: "Article 2",
        subtitle: "Subtitle 2",
        abstract: "Abstract 2",
        body: "",
        category: "Sports"
      },

      {
        id: 3,
        title: "Article 3",
        subtitle: "Subtitle 3",
        abstract: "Abstract 3",
        body: "",
        category: "Economy"
      },
    ]

  }
    ngOnInit(): void {}

    publishArticle() {
      this.articles.push({ ...this.article });
    
      this.message = `The article[${this.article.title}] has been published`;
    
      this.articleForm.reset();
    }

    resetForm() {
      this.articleForm.reset();
    }
    
  
}

