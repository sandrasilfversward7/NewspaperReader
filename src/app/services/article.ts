export interface Article {
  id?: number;
  id_user?: string;
  title: string;
  subtitle: string;
  abstract: string;
  body?: string;
  category: string;
  update_date?: string;
  image_data?: string;
  image_media_type?: string;
  thumbnail_data?: string;
  thumbnail_media_type?: string;
}