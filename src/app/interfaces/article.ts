

//Typmall som inte skapar objekt
//Den säger till TypeScript att om något ska vara en Article
//Så ska den ha exakt det här fältet med de här typerna



export interface Article {
  id: number; //tillagd för excerise 3
  title: string;
  subtitle: string;
  body: string;
  abstract: string;
  category: string;
  thumbnail_data?: string;
  thumbnail_media_type?: string;
  }

