import { Routes } from '@angular/router';
import { ArticlesList } from './articles-list/articles-list';
import { ArticleDetails } from './article-details/article-details';

export const routes: Routes = [
    { path: '', redirectTo: '/articles', pathMatch: 'full' },
    { path: 'articles', component: ArticlesList },
    { path: 'article/:id', component: ArticleDetails }
  ];