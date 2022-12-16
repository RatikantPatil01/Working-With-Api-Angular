import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-get-list-resource',
  templateUrl: './get-list-resource.component.html',
  styleUrls: ['./get-list-resource.component.css']
})
export class GetListResourceComponent {

  constructor (public userlist:GetListUserService){
    this.singleUserValue=true;
    this.userlist.getListResource().subscribe((data)=>{
      console.warn("Here",data);
    this.getlistResourceData= data;
   
    });
  }

 
  singleUserValue:any;
  getlistResourceData :any;
  
  }

