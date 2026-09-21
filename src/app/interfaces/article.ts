

//Typmall som inte skapar objekt
//Den säger till TypeScript att om något ska vara en Article
//Så ska den ha exakt det här fältet med de här typerna



export interface Article {
    title: string;
    subtitle: string;
    body: string;
    abstract: string;
    category: string;
  }

