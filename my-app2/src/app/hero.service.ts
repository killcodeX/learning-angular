import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private url = 'https://api.github.com/users'
  constructor(private http: HttpClient) { }

  getTask(data: string): Observable<any> {
    return this.http.get<Task>(`${this.url}/${data}`);
  }
}
