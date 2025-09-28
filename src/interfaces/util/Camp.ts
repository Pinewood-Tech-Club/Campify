export interface Camp {
  id: number; // number automatic
  likes: number; // number
  comments: number; // number
  description: string; // varchar 10000
  name: string; // varchar 100
  image?: string; // varchar 1000
  short_description?: string; // varchar 75
  is_public: boolean;
  tags: string[]; // varchar 100
}
