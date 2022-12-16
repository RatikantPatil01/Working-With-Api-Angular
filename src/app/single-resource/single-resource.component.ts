import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-single-resource',
  templateUrl: './single-resource.component.html',
  styleUrls: ['./single-resource.component.css']
})
export class SingleResourceComponent {

  constructor (public userlist:GetListUserService){
    this.singleUserValue=true;
    this.userlist.getSingleListResource().subscribe((data)=>{
      console.warn("Here",data);
    this.getSingleResourceData= data;
   
    });
  }

 
  singleUserValue:any;
  getSingleResourceData :any;


  }

