import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService implements OnInit {

  user:any;

  ngOnInit(): void {
     
  }

  getuserdata(){
    const loginuser=sessionStorage.getItem('loginUser');

    if(loginuser){
      return JSON.parse(loginuser);
    } 
  }

  is_user_login(){
    if(sessionStorage.getItem('loginUser')){
      return true;
    }else{
      return false;
    }
  }

  logoutuser(){
    sessionStorage.removeItem('loginUser');
    location.reload();
  }
}
