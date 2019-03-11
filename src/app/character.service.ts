import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import  { Character } from './character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private _url: string = "https://rickandmortyapi.com/api/character/";
  constructor(private http: HttpClient) { }

    getAll(): Observable<any>{
      return this.http.get<Character[]>(this._url)
      .pipe(catchError(this.errorHandler))
    }
    getOne(id): Observable<any>{
      return this.http.get<Character[]>(`${this._url}${id}`)
      .pipe(catchError(this.errorHandler))
    }
    errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "server error")
    }
}
