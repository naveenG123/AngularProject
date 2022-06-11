import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { UserData } from 'src/app/model/UserData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginUserData:UserData=new UserData();
  values: string='';
  constructor(private _auth:AuthservicesService,private _router:Router) { }

  onKey(event: any) { // without type info
    this.values += event.target.value;
  }
  register()
  {
    this._router.navigate(['/register']);
  }
  loginUser() {    
    
    this._auth.loginUser(this.loginUserData).subscribe(res => {
      localStorage.setItem('token', res.token)  
      localStorage.setItem('user',this.loginUserData.userName)    
      if(this.loginUserData.userName==='admin')
      {        
      localStorage.setItem('isAdmin', 'true');
      this._router.navigate(['/airline'])     
      }
      else
      {
        localStorage.setItem('isAdmin', 'false');
      this._router.navigate(['/home'])
      }
    },
      err => alert(err.error.message));
  }
  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.loginUserData.formloginGroup.controls[controlname].hasError(typeofvalidator);
  }

}
