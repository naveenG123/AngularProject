import { Component, OnInit } from '@angular/core';
import { AirlineData } from '../model/airline.model';
import { Router } from '@angular/router';
import { AddairlineService } from '../services/addairline.service';


@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {

  
  airlineData:AirlineData=new AirlineData();
  airlineModellist:Array<AirlineData>=new Array<AirlineData>();
  IsError:boolean=false;
  errorRes:string='';
  constructor(private _auth:AddairlineService, private _route:Router, ) { }
  
  ngOnInit(): void {       
    // this._auth.getAllAirline().subscribe(res => {        
    //  this.airlineModellist=res    
        
    // },
    //   err =>{ this.IsError=true,this.errorRes=err.error.message});      
}

// deleteAirline(index:any,airline:any)
// {
//   this._auth.blockAirline(index,airline.airlineNo).subscribe(res=>{
//     alert("Blocked Successfully"),
//     this._route.navigate(["\airline"]).then(()=>{window.location.reload()})  
//   },err=>alert(err.error.message));
// }
deleteAirline(data:any)
{
  this._auth.blockAirline(this.airlineData).subscribe(res=>{
    alert("Blocked Successfully"),
    this._route.navigate(["\airline"]).then(()=>{window.location.reload()})  
  },err=>alert(err.error.message));
}

addAirline(data:any)
{

  // debugger;
    this._auth.registerAirline(this.airlineData).subscribe(res => {
      //localStorage.setItem('token', res.token)    
      alert("Register Successfully")  ;
      this._route.navigate(["/airline"])
    },
      err => console.log(err));
  this._route.navigate(["\addairline"]);

}
}
