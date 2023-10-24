import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'https://endpoint/api/customer';

  constructor(private http: HttpClient) { }

  getCustomer(): Observable<{ ok: string }> {

    var response = this.http.get<{ ok: string }>(this.apiUrl).pipe(
      tap(response => {
        console.log("CustomerService:" + response);
      })
    );

    return response;
  }
}
