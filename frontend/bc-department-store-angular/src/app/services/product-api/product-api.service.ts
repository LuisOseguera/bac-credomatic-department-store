import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalBackendUrl } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    let direction = globalBackendUrl + 'product';
    return this.http.get<any>(direction);
  }

  public getProductById(id: any): Observable<any> {
    let direction = globalBackendUrl + 'product/' + id;
    return this.http.get<any>(direction);
  }

  public postProduct(productForm: any): Observable<any> {
    let direction = globalBackendUrl + 'product';
    return this.http.post<any>(direction, productForm);
  }

  public putProductById(id: any, productForm: any): Observable<any> {
    let direction = globalBackendUrl + 'product/' + id;
    return this.http.put<any>(direction, productForm);
  }

  public deleteProductById(id: any): Observable<any> {
    let direction = globalBackendUrl + 'product/' + id;
    return this.http.delete<any>(direction);
  }
}
