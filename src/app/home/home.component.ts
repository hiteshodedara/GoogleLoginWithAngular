import { Component, OnInit, inject } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  user:any;
  

   authservice=inject(LoginAuthService)
  ngOnInit(): void {
  
  this.user=this.authservice.getuserdata()
      
  }
  
  on_logout_click(){
    this.authservice.logoutuser();
    console.log("i clicked on logout"); 


  }

}
