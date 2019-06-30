import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private _url = "http://localhost:7000/api/getEmployees";

  employees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(
      retry(3),
      catchError(this.errorHandler)

    ) ;
  }

  errorHandler(error : HttpErrorResponse)
  {
    
    

      return throwError(error)
  }
}
