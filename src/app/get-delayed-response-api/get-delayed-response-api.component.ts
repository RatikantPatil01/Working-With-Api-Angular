import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';
@Component({
  selector: 'app-get-delayed-response-api',
  templateUrl: './get-delayed-response-api.component.html',
  styleUrls: ['./get-delayed-response-api.component.css']
})
export class GetDelayedResponseApiComponent {

  singleUserValue:any;
  getlistResourceData :any;

  constructor(public getdelayad:GetListUserService){
    this.singleUserValue=true;
    this.getdelayad.GetDelayedResponse().subscribe((data)=>{
      console.warn("Here",data);
    this.getlistResourceData= data;
   
    });
   
  }

}
