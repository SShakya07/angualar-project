import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcar1',
  templateUrl: './shoppingcar1.component.html',
  styleUrl: './shoppingcar1.component.css'
})
export class Shoppingcar1Component implements   OnInit{

  public Categories:string[]=[];
  public Products:any[]=[];


  public GetCategory(){
    fetch("http://fakestoreapi.com/products/categories")
    .then(response=>response.json())
    .then(data=>{
      this.Categories=data;
    })
  }
  public GetProducts(url:string){
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
          this.Products=data;
        })

  }


  constructor(){

  }
  ngOnInit(): void {
    this.GetCategory();
      this.GetProducts("http://fakestoreapi.com/products");
  }

}
