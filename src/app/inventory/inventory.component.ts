import { Component, OnInit } from '@angular/core';
import { InventoryData } from '../model/inventorymodel';
import { Router } from '@angular/router';
import { InventoryservicesService } from '../services/inventoryservices/inventoryservices.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  inventoryData:InventoryData=new InventoryData();
  inventoryModellist:Array<InventoryData>=new Array<InventoryData>();
  IsError:boolean=false;  
  errorRes:string='';
  constructor(private _auth:InventoryservicesService,private _router:Router) { }
  

  ngOnInit(): void {
    // this._auth.getAllInventory().subscribe(res => {
    //   this.inventoryModellist=res   
    //  },
    //    err => {this.IsError=true;
    //      this.errorRes="No Inventory exists";
    //      console.log(err)});      
  }

  addInventory()
  {
    this._router.navigate(["\addinventory"]);
  }
  getAllInventory()
  {
    this._auth.getAllInventory().subscribe(res => {
      this.inventoryModellist=res   
     },
       err => {this.IsError=true;
         this.errorRes="No Inventory exists";
         console.log(err)});   
  }
  

  // this._auth.getAllAirline().subscribe(res => {        
    //  this.airlineModellist=res    
        
    // },
    //   err =>{ this.IsError=true,this.errorRes=err.error.message}); 

}
