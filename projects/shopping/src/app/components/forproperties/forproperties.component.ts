import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forproperties',
  templateUrl: './forproperties.component.html',
  styleUrl: './forproperties.component.css'
})
export class ForpropertiesComponent implements OnInit{
  public Products:any[]=[];


  constructor(){

  }
  ngOnInit(): void {
    fetch('http://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>{
      this.Products=data;
    })
      
  }

}
