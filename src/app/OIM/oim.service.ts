import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Workviewuser } from './workviewuser';

@Injectable({
  providedIn: 'root'
})
export class OimService {
  private oimUserUrl = 'api/Workviewusers';

  constructor(private http: HttpClient) {

   }
   getUserDetails(): Observable<Workviewuser[]> {
    return this.http.get<Workviewuser[]>(this.oimUserUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getUser(id: number): Observable<Workviewuser> {
    if (id === 0) {
      return of(this.initializeUser());
    }
    const url = `${this.oimUserUrl}/${id}`;
    console.log("Get User : ");
    return this.http.get<Workviewuser>(url)
      .pipe(
        tap(data => console.log('getuser information: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createProduct(product: Workviewuser): Observable<Workviewuser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product.requestId = null;
    product.status='NEW REQUEST';
    return this.http.post<Workviewuser>(this.oimUserUrl, product, { headers })
      .pipe(
        tap(data => console.log('createUser: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.oimUserUrl}/${id}`;
    return this.http.delete<Workviewuser>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  updateProduct(product: Workviewuser): Observable<Workviewuser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.oimUserUrl}/${product.id}`;
    return this.http.put<Workviewuser>(url, product, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }
   getUserInformation() : Observable<Workviewuser[]>
   {
    return this.http.get<Workviewuser[]>(this.oimUserUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
   }
   private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
  private initializeUser(): Workviewuser {
    // Return an initialized object
    return {
      requestId: '',
      supervisorId: null,
      loginId: null,
      modelId: null,
      computerName: null,
      DomainName: null,
      status: null,
      operatingSystem: null,
      citrixAccess: 'No',
     Department: null,
     BusinessGroup: null,
     Justification: null,
      id:0
      
    };
  }
}
