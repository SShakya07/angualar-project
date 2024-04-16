import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../../services/captcha.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  public Code:string ='';
  
  constructor(private captcha:CaptchaService){

  }
  ngOnInit(): void {
    this.Code = this.captcha.GenerateCode();
      
  }
  public ChangeCode(){
    this.Code =this.captcha.GenerateCode();
  }

}
