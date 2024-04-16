import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent implements OnInit{

  public Categories:string[]=[];
  public Products:any[]=[];
  public CartItems:any[]=[];
  public CartCount:number =0;
  public isCartVisible:boolean = false;

  public GetCartCount(){
    this.CartCount = this.CartItems.length;
  }

  public GetCategories(){
    fetch("http://fakestoreapi.com/products/categories")
    .then(response=>response.json())
    .then(data=>{
      data.unshift("all")
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
    this.GetCategories();
    this.GetProducts("http://fakestoreapi.com/products");
    this.GetCartCount();
      
  }
  public CategoryChanged(e:any){
   if(e.target.value=="all"){
    this.GetProducts(`http://fakestoreapi.com/products`);
   }
   else{
    this.GetProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
   }
  }

  public AddToCartClick(id:number){
     fetch(`http://fakestoreapi.com/products/${id}`)
     .then(response=>response.json())
     .then(data=>{
      this.CartItems.push(data) ;
      alert(`${data.title}\nAdded to Cart`);
      this.GetCartCount();
    })
  }
  public ToggleCart(){
    this.isCartVisible = (this.isCartVisible ==false)?true:false;
  }

  public RemoveItem(i:number){
    let flag = confirm("Are you sure want to delete ?");
    if(flag==true){
      this.CartItems.splice(i,1);
      this.GetCartCount();
    }
   
  }

}
