import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit{

  is_password_show:boolean=false;
  is_c_password_show:boolean=false;
  


  ngOnInit(): void {
  
  }


  on_password_show(){
    this.is_password_show=!this.is_password_show;
  }
  on_c_password_show(){
    this.is_c_password_show=!this.is_c_password_show;
  }


}
