import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  private apiUrl = 'https://endpoint/api/scheduler';

  constructor(private http: HttpClient) { }

  postSchudeler(request: FormData): Observable<{ ok: boolean }> {

    console.log("service: SchudulerService");
    console.log(request);

    var response = this.http.post<{ ok: boolean }>(this.apiUrl, request).pipe(
      tap(response => {
        console.log("SchedulerService:" + response);
      })
    );

    return response;
  }
}
