import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrl: './switchdemo.component.css'
})
export class SwitchdemoComponent implements OnInit{

  public ViewName:string ="basic";


 
  constructor(){

  }
  ngOnInit(): void {
      
  }
  public ChangeView(event:any){
  this.ViewName =event.target.name;
  }


  


}
