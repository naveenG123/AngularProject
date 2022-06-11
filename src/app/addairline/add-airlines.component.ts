import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineData } from '../model/airline.model';


@Component({ 
  templateUrl: './add-airlines.component.html',
  styleUrls: ['./add-airlines.component.css']
})
export class AddAirlinesComponent  {

  airlineData:AirlineData=new AirlineData();
  constructor(private _router:Router) { }

  registerAirline()
  {
    // debugger;
    // this._auth.registerAirline(this.airlineData).subscribe(res => {
    //   //localStorage.setItem('token', res.token)    
    //   alert("Register Successfully")  ;
    //   this._router.navigate(["/airline"])
    // },
    //   err => console.log(err));
  }

}
