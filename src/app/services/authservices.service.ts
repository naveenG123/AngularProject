import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  private _loginUrl='http://localhost:30414/api/v1.0/flight/authentication/login';
  private _registerUrl='http://localhost:46990/api/Login/Addnewuser';
  constructor(private http:HttpClient,private router:Router) {
             
  }

  loginUser(user:any)
  {
     var data={
          userName:user.userName,
          password:user.password
      }
      return this.http.post<any>(this._loginUrl,data);
  }

  registerUser(user:any)
  {
      return this.http.post<any>(this._registerUrl,user);
  }

  logoutUser()
  {
      localStorage.removeItem('token');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('user');
      this.router.navigate(['/home']).then(()=>{window.location.reload()})  ;
  }

  getToken()
  {
      return localStorage.getItem('token');
  }

  adminDetail()
  {               
      return localStorage.getItem('isAdmin');
  }
  loggedIn()
  {
      return !!localStorage.getItem('token');
  }
}
