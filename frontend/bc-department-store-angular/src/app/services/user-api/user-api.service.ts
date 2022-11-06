import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { globalBackendUrl } from 'src/app/app.component';
import { EncrDecrService } from '../encr-decr.service';

const globalEncryptionKey: string = 'l1998U04!11$';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient, private encrDescr: EncrDecrService) {}

  public getUsers(): Observable<any> {
    const direction = globalBackendUrl + 'user';
    return this.http.get<any>(direction);
  }

  public postUser(userForm: any): Observable<any> {
    const direction = globalBackendUrl + 'user';
    return this.http.post<any>(direction, userForm);
  }

  public sendEmail(userForm: any): Observable<any> {
    const direction = globalBackendUrl + 'send-email';
    let emailBody = {
      from: 'luisoseguerainfo@gmail.com',
      to: userForm.email,
      subject: 'Correo de verificación',
      message:
        'Hola ' +
        userForm.name +
        ', has creado satisfactoriamente una cuenta en la BC | Tienda Departamental. No olvides que tu contraseña es «' +
        this.encrDescr.get(globalEncryptionKey, userForm.password) +
        '» (sin las comillas).',
    };
    return this.http.post<any>(direction, emailBody);
  }
}
