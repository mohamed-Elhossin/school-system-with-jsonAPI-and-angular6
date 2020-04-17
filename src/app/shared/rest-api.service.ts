import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  restAPIURL = 'http://localhost:3000/employee';



  httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })

  }


  constructor(private http: HttpClient) { }


  get(): Observable<Employee> {
    return this.http.get<Employee>(this.restAPIURL)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }

  getbyID(id): Observable<Employee> {
    return this.http.get<Employee>(this.restAPIURL + '/' + id)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }

  creat(employee): Observable<Employee> {
    return this.http.post<Employee>(this.restAPIURL, JSON.stringify(employee), this.httpOption)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }

  delete(id) {
    return this.http.delete<Employee>(this.restAPIURL + '/' + id)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }
  updet(id, employee) {
    return this.http.put<Employee>(this.restAPIURL + '/' + id, JSON.stringify(employee), this.httpOption)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }

  handelError(error) {
    let errormessage = "";
    if (error.error instanceof ErrorEvent) {
      errormessage = error.error.message;
    }
    else {
      errormessage = `ERROR code : ${error.status} \n ERROR message : ${error.message}`;
    }
    window.alert(errormessage);
    return throwError(errormessage)
  }

}
