import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InventoryservicesService {

  headers: any;
  private _inventoryURL = 'http://localhost:5663/api/Inventory/getinventory';
  private _addInventoryUrl = 'http://localhost:5663/api/Inventory/Addinventorydetails';
  private _searchFlightURL = 'http://localhost:5663/api/Inventory';
  constructor(private http: HttpClient, private router: Router) {
  }

  getFlightByPlaces(fromplace: any, toplace: any) {
      /*let httparms = new HttpParams()
      httparms.set("fromplace", toplace);
      httparms.set('toplace', fromplace);
      let options = { params: httparms };*/
      var link=this._searchFlightURL+"?fromplace="+fromplace+"&toplace="+toplace+"";
      return this.http.get<any>(link);
  }
  getAllInventory() {
    debugger;
   
      return this.http.get<any>(this._inventoryURL);
  }

  addInventory(inventory: any) {
      debugger;
      var data = {
          FlightNo: inventory.FlightNo,
          FromPlace: inventory.FromPlace,
          ToPlace: inventory.ToPlace,
          StartDateTime: inventory.StartDateTime,
          EndDateTime: inventory.EndDateTime,
          BusinessClassSeat: inventory.BusinessClassSeat,
          NonBusinessClassSeat: inventory.NonBusinessClassSeat,
          Price: Number(inventory.Price),
          NoOfRows: Number(inventory.NoOfRows),
          Meal: Number(inventory.Meal)         

      }
      return this.http.post<any>(this._addInventoryUrl, data);
  }
}
