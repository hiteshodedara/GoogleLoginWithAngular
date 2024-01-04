declare var google:any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  private router=inject(Router);

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '336926034064-she3v3kf43a7atgi44lgntrukkbtgskb.apps.googleusercontent.com',
      callback:(resp:any)=>this.heandelLogin(resp)
    })

    google.accounts.id.renderButton(document.getElementById('google-btn'),{
      theme:'filled_blue',
      size:'large',
      shape:'rectangle',
      width:200
    })
  }

  is_password_show:boolean=false;

  on_password_show(){
    this.is_password_show=!this.is_password_show;
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split('.')[1]));
  }

  heandelLogin(res:any){
    if(res){
      const payload=this.decodeToken(res.credential);

      sessionStorage.setItem('loginUser',JSON.stringify(payload));

      this.router.navigate(['/home']);
    }
  }
}
