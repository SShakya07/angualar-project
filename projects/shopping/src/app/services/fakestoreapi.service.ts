import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakestoreapiService {


  public GetCategories():Observable<string[]>{
   return this.http.get<string[]>('http://fakestoreapi.com/products/categories');

  }
  public GetProducts():Observable<any[]>{
    return this.http.get<any[]>('http://fakestoreapi.com/products');

  }

  constructor(private http:HttpClient) { }
}
