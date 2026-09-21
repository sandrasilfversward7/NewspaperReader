import { Component } from '@angular/core';
import { NewspaperReader } from './newspaper-reader/newspaper-reader';
import { ArticlesList } from './articles-list/articles-list';

@Component({
  selector: 'app-root',
  imports: [NewspaperReader, ArticlesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}