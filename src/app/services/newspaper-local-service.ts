import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class NewspaperLocalService {
  articles: Article[] = [ //Servicen har nu ansvar för själva listan.
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
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id:number) : Article | undefined {//retunerar antingen en artikel eller ingenting
    for (let article of this.articles) {
      if (article.id === id) {
        return article;
      }
    }
    return undefined;
    }  
  
  addArticle(article: Article): void {
    article.id = this.articles.length + 1;
    this.articles.push(article);
    }

}
