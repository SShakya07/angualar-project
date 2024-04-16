import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo1',
  templateUrl: './fordemo1.component.html',
  styleUrl: './fordemo1.component.css'
})
export class Fordemo1Component implements OnInit{
 
   public Products:any=[];
  constructor(){
  }
  ngOnInit(): void {
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>{
      this.Products=data;
    })
      
  }

}
