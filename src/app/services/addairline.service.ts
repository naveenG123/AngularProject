import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddairlineService {
  
  // private _airlineUrl='http://localhost:28798/api/Airline/';
  private _registerAirlineUrl='http://localhost:28798/api/Airline/Home/Add';    
  private _blockAirlineURL='http://localhost:28798/api/Airline/Block?id=1';
  constructor(private http:HttpClient,private router:Router) {
             
  }

// getallairlines()
// {
//   return this.http.get<any>(this._airlineUrl);
// }

  registerAirline(airlinedetail:any)
  {   
      return this.http.post<any>(this._registerAirlineUrl,airlinedetail);
  }
blockAirline(airlineno:any)
  {
      debugger;
      return this.http.delete<any>(this._blockAirlineURL,airlineno);
  }
  // blockAirline(id:any,airlineno:any)
  // {
  //     debugger;
  //     return this.http.delete<any>(this._blockAirlineURL+airlineno,id);
  // }
}
