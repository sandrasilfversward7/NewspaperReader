import { Routes } from '@angular/router';
import { ArticlesList } from './articles-list/articles-list';
import { ArticleDetails } from './article-details/article-details';
import { ArticleEdition } from './article-edition/article-edition';

export const routes: Routes = [
  { path: '', component: ArticlesList },
  { path: 'articles', component: ArticlesList },
  { path: 'article/:id', component: ArticleDetails },

  { path: 'new', component: ArticleEdition },
  { path: 'edit/:id', component: ArticleEdition }
];