import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../../models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  constructor(private httpClient : HttpClient) {}
  GetProductList(): Observable<Products[]>{
    return this.httpClient.get<Products[]>('assets/data.json');

  }

}
