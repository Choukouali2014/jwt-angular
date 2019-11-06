import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private apiUrl = 'https://api.zoom.us/v2/users';
 constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Origin: 'https://api.zoom.us/v2/users',
        Accept: 'application/json'
      }
      )
  };

  getAll() {
    console.log(this.httpOptions);
    return this.http.get(this.apiUrl, this.httpOptions);
    
  }
 
  
}
