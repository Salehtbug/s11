import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private _url: HttpClient) { }

  getCategories() {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

  getProducts(): Observable<any[]> {
    return this._url.get<any[]>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  getProductsByID(id: number): Observable<any> {
    return this._url.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`);
  }

  addUser(data: any) {
    return this._url.post<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);
  }

  getAllUsers() {
    return this._url.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }

  addCategories(data: any) {
    return this._url.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data);
  }
  
  addProducts(data: any) {
    return this._url.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", data);
  }

}
