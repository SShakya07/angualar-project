import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrl: './fordemo.component.css'
})
export class FordemoComponent implements OnInit{
  // public  categories:string[]=["Electronics","Footwear","Fashion"];
  // public menu:any[]=[
  //   {Category:"Electronics",Products:["Samsung tv","Mobile"]},
  //   {Category:"Footwear",Products:["Nike Casulas","Lee Boot"]}
  // ];
     public mars:any={};
  constructor(){

  }
  ngOnInit(): void {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response=>response.json())
    .then(data=>{
      this.mars=data;
    })
      
  }

}
