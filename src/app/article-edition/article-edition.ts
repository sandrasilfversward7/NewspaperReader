import { Component, ChangeDetectorRef } from '@angular/core';
import { Article } from '../interfaces/article';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../services/news';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-article-edition',
  imports: [FormsModule, RouterLink],
  templateUrl: './article-edition.html',
  styleUrl: './article-edition.css',
})
export class ArticleEdition {
  message: string = '';
  id: string | null = null;

  article: Article = {
    title: '',
    subtitle: '',
    abstract: '',
    body: '',
    category: ''
  };

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private cdr: ChangeDetectorRef
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    

    if (this.id) {
      this.newsService.getArticle(this.id).subscribe(article => {
        this.article = article;
        this.cdr.markForCheck();
      });
    }
  }

  fileChangeEvent(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
    
      reader.onload = () => {
        const base64 = reader.result as string;
    
        this.article.image_media_type = file.type;
        this.article.image_data = base64.split(',')[1];
      };
    
      reader.readAsDataURL(file);
    }
  }

  saveArticle(): void {

    if (this.id) {
      this.newsService.updateArticle(this.article).subscribe(() => {
        this.message = 'Article saved successfully!';
        this.cdr.markForCheck();
      });
  
    } else {
      this.newsService.createArticle(this.article).subscribe(() => {
        this.message = 'Article created successfully!';
        this.cdr.markForCheck();
      });
    }
  
  }
}