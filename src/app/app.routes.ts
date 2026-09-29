import { Routes } from '@angular/router';
import { ArticlesList } from './articles-list/articles-list';
import { ArticleDetails } from './article-details/article-details';

export const routes: Routes = [
    { path: '', redirectTo: '/articles', pathMatch: 'full' }, // startpage, 
    { path: 'articles', component: ArticlesList }, // articles show articlelist
    { path: 'article/:id', component: ArticleDetails } //e.g article/12 shows article with id 12
  ];