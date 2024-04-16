import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NasaapiService {

  constructor(private http:HttpClient) { }

  public GetPhotos():Observable<any[]>{
    return this.http.get<any[]>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');

  }
}
