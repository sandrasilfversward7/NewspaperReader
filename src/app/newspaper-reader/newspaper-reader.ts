
//Importera component från Angular
import { Component, OnInit} from '@angular/core';

//Importera Article 
import { Article } from '../interfaces/article';

//Importera 
import { ViewChild } from '@angular/core';

//Importera FormsModule  för att få ngForm och ngModel att gungera 
import { FormsModule } from '@angular/forms';

//Metadtta som beskriver klassen som kommer
@Component({
  selector: 'app-newspaper-reader',
  imports: [FormsModule],
  templateUrl: './newspaper-reader.html',
  styleUrl: './newspaper-reader.css',
})

//klassen får användas och importeras 
export class NewspaperReader implements OnInit {
  article!: Article; //variabeln som kopplas till Article Interface

  @ViewChild('articleForm') articleForm: any; //ViewChild används när ts vill få tag i något som finns i HTML

  constructor() { } //när newspaperreader skapas, kör den här funktionen först

  ngOnInit(): void { //lifecycle - metod. Körs automatiskt när componenten har skapats och Angular initialiserar den 
    this.article = { //variablen som tillhör den här komponenten
      title: "",
      subtitle: "",
      body: "",
      abstract: "",
      category: ""
    };
  }

  sendForm(): void {
    window.alert(
      "Received information: " +
      this.article.title + " " +
      this.article.subtitle + " " +
      this.article.body + " " +
      this.article.abstract + " " +
      this.article.category
    );

    this.clear();
  }

  clear(): void {
    this.articleForm.reset();
  }


}