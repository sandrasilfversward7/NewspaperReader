// Component responsible for creating and editing articles. 
// If an article ID exists in the URL, the article will load form API for editin. 
// Othersie the component is used to create a new article

//Imports
import { Component, ChangeDetectorRef } from '@angular/core';
import { Article } from '../interfaces/article';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../services/news';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-article-edition',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './article-edition.html',
  styleUrl: './article-edition.css',
})

export class ArticleEdition {
  message: string = '';
  id: string | null = null; //To check if we are editing an article or creating one
  articleLoaded: boolean = false; //To make sure article has loaded before shwowing

  //Empty article for creating a new
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

    //Get article ID from URL
    this.id = this.route.snapshot.paramMap.get('id');
    
    //If ID, load article for editing
    if (this.id) {
      this.newsService.getArticle(this.id).subscribe(article => {
        this.article = article;
        this.articleLoaded = true;
        this.cdr.markForCheck();
      });
    } else {
      this.articleLoaded = true;
    }
  }

  //Converts  selected image to base64 and store in article
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

  //Saves changes to existing article or creates new
  saveArticle(): void {

    //Update edited article
    if (this.id) {
      this.newsService.updateArticle(this.article).subscribe(() => {
        this.message = 'Article saved successfully!';
        this.cdr.markForCheck();
      });
  
    //Create new article
    } else {
      this.newsService.createArticle(this.article).subscribe(() => {
        this.message = 'Article created successfully!';
        this.cdr.markForCheck();
      });
    }
  }
}