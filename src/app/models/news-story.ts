export interface NewsStory {
  id: string;
  title: string;
  type: string;
  time: number;
  url: string;
  score: number;
  by: string;
  descendants: number;
  kids?: string[];
}
