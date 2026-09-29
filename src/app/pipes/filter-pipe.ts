import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../interfaces/article';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(articles: Article[], term: string): Article[] {

    if (!term) {
      return articles;
    }
  
    term = term.toLowerCase();
  
    return articles.filter(article =>
      article.title.toLowerCase().includes(term) ||
      article.subtitle.toLowerCase().includes(term) ||
      article.abstract.toLowerCase().includes(term)
    );
  }
}
