import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo1',
  templateUrl: './switchdemo1.component.html',
  styleUrl: './switchdemo1.component.css'
})
export class Switchdemo1Component implements OnInit{
  public ViewName:string="basic";

  constructor(){

  }
  ngOnInit(): void {
      
  }
  public ChangeView(event:any){
    this.ViewName=event.target.name;

  }

}
