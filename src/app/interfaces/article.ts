

//Typmall som inte skapar objekt
//Den säger till TypeScript att om något ska vara en Article
//Så ska den ha exakt det här fältet med de här typerna



export interface Article {
  id?: number;
  title: string;
  subtitle: string;
  body: string;
  abstract: string;
  category: string;
  thumbnail_image?: string;
  thumbnail_media_type?: string;
  image_data?: string;
  image_media_type?: string;
  update_date?: string;
  username?: string;
  }

