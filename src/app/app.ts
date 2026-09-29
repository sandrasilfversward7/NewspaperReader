import { Component } from '@angular/core';
import { NewspaperReader } from './newspaper-reader/newspaper-reader';
import { ArticlesList } from './articles-list/articles-list';
import { NewspaperWithService } from './newspaper-with-service/newspaper-with-service';

@Component({
  selector: 'app-root',
  imports: [NewspaperReader, ArticlesList, NewspaperWithService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}