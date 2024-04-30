import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NewsStory } from '../models/news-story';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNewsIdsByCategory = (category: string): Observable<string[]> => 
    this.http.get<string[]>(`${environment.apiEndpoint}${category}${environment.suffixSegment}`);
  
  getNewsStoryById = (id: string): Observable<NewsStory> =>
    this.http.get<NewsStory>(`${environment.apiEndpoint}${environment.storySegment}${id}${environment.suffixSegment}`);
}
