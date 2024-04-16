import { Component, OnInit } from '@angular/core';
import { NasaapiService } from '../../services/nasaapi.service';

@Component({
  selector: 'app-nasademo',
  templateUrl: './nasademo.component.html',
  styleUrl: './nasademo.component.css'
})
export class NasademoComponent implements OnInit{
  public Nasa:any[]=[];
 constructor(private api:NasaapiService){

 }
  ngOnInit(): void {
    this.api.GetPhotos().subscribe(data=>this.Nasa = data);
      
  }

}
