import { Component, OnInit } from '@angular/core';
import { FakestoreapiService } from '../../services/fakestoreapi.service';

@Component({
  selector: 'app-servicedemo',
  templateUrl: './servicedemo.component.html',
  styleUrl: './servicedemo.component.css'
})
export class ServicedemoComponent implements OnInit{

  public Categories:string[]=[];
  public Products:any[]=[];

  
  constructor(private api:FakestoreapiService){

  }
  ngOnInit(): void {
     this.api.GetCategories().subscribe(data=>this.Categories= data);
     this.api.GetProducts().subscribe(data=>this.Products=data);
      
  }

}
