import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Itask } from './itask';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private url:string = "http://localhost:7000/api/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Itask[]>{
    return this.http.get<Itask[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
