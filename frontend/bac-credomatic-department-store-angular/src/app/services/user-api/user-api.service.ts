import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { globalBackendUrl } from 'src/app/app.component';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    const direction = globalBackendUrl + 'user';
    return this.http.get<any>(direction);
  }
}
