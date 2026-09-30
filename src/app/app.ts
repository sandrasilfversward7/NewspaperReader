import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  searchText = '';

  constructor(private router: Router) {}

  onSearch(text: string) {
    this.router.navigate(['/'], { queryParams: { search: text } });
  }
}