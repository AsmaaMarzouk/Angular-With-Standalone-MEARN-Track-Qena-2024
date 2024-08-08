import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {

  url:string=`${environment.baseUrl}/Products`;
// api => httpclient => methods (get,post,put|patch,delete)
  constructor(private httpclient: HttpClient) { }

  getAllproducts():Observable<Iproduct[]> {
    return this.httpclient.get<Iproduct[]>(`${this.url}`);
  }


  // url param
  getPrdByID(prdID:string):Observable<Iproduct> {
    return this.httpclient.get<Iproduct>(`${this.url}/${prdID}`)

  }

  // query string

  searchWithProductMaterial(mat:string):Observable<Iproduct[]> {
    return this.httpclient.get<Iproduct[]>(`${this.url}?Material=${mat}`);
  }
}
