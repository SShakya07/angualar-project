import { Component, OnInit } from '@angular/core';
import { SpringbootService } from '../../services/springboot.service';

@Component({
  selector: 'app-springangular',
  templateUrl: './springangular.component.html',
  styleUrl: './springangular.component.css'
})
export class SpringangularComponent implements OnInit{

  public User:any[]=[];

  constructor(private api:SpringbootService){

  }
   ngOnInit(): void {
    this.api.GetUser().subscribe(data=> this.User = data);
       
   }
}
