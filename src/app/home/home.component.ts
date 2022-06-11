import { Component, OnInit } from '@angular/core';
import { InventoryData } from '../model/inventorymodel';
import { Router } from '@angular/router';
import { InventoryservicesService } from '../services/inventoryservices/inventoryservices.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inventoryData: InventoryData = new InventoryData();
  inventoryModellist: Array<InventoryData> = new Array<InventoryData>();
  errorRes:string='';
  IsError:boolean=false;
  IsSearch:boolean=false;
  // constructor() { }

  // ngOnInit(): void {
  // }
  
  constructor(private _service: InventoryservicesService,private _router:Router) {
    
    //this._service.getAllInventory().subscribe(res=>this.Success(this.inventoryModellist=res),err=>console.log(err))
   }
  //rowData = [];  
  ngOnInit(): void {
    
  }
  IsAlert:Boolean=false;
  alerts:string='';
  SearchInventoyr() {
    if(this.inventoryData.FromPlace===""|| this.inventoryData.ToPlace===""||this.inventoryData.StartDateTime==""||this.inventoryData.EndDateTime==='')
    {
      this.alerts="Please fill the fields";      
      this.IsAlert=true;
      alert("Please fill the details");
      return;
    }
    this.IsError=false;
    this._service.getFlightByPlaces(this.inventoryData.FromPlace,this.inventoryData.ToPlace).subscribe(res=>{
      this.IsSearch=true;
      this.Success(res)},err=>{        
      this.IsSearch=true;
      this.Error(err);
      })
  }

  // bookFlight(index:any,detail:any)
  // {    
  //   if(localStorage.getItem("token")!=null)
  //   {
  //     this._data.changeName(detail);
  //   this._router.navigate(["/booking"]);
  //   }
  //   else
  //   this._router.navigate(["/login"]);
  // }
  GetAllInventory(){
    this._service.getAllInventory().subscribe(res=>this.Success(res),err=>this.Error(err));   
  }
  Error(err:any)
  {
    this.IsError=true;
    this.errorRes="Failed to find flights";
    
  }
  Success(res:any)
  {
    this.inventoryModellist=res;
  }
}
