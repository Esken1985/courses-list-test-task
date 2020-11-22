import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { ICourses } from '../../../classes/courses';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class CoursesListServiceService {
  private _url: string = "https://my-json-server.typicode.com/Esken1985/mockDB/courses"
  constructor(private http: HttpClient) {}

  getCourses(): Observable<ICourses[]>{
    return this.http.get<ICourses[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
      return throwError(error.message || "Server Error")
  }

// ******************GET SINGLE COURSE **************
  getSingleCourse(id: number): Observable<ICourses>{
    return (
      this.http.get<ICourses>(this._url + "/" + id)
    )
  }

}