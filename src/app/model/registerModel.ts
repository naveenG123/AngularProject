import { FormBuilder, FormControl, Validators } from "@angular/forms";

export class RegisterModel
{
    UserName:string='';
    Password:string='';
    Email:string='';
    Gender: string='';
  ContactNumber:Number=0;
    formRegisterGroup: any;
    constructor() {
        var _builder=new FormBuilder();
        this.formRegisterGroup=_builder.group({});        
        var validationcollection=[];        
        validationcollection.push(Validators.email);
        validationcollection.push(Validators.required);
       this.formRegisterGroup.addControl("passwordControl",new FormControl('',Validators.required));
       this.formRegisterGroup.addControl('emailControl',new FormControl('',Validators.email));
       this.formRegisterGroup.addControl('userNameControl',new FormControl('',Validators.required));
       this.formRegisterGroup.addControl('GenderControl',new FormControl('',Validators.required));
       this.formRegisterGroup.addControl('contactnumberControl',new FormControl('',Validators.required));
    }
}