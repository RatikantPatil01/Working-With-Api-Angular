import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';


@Component({
  selector: 'app-single-resource-not-found',
  templateUrl: './single-resource-not-found.component.html',
  styleUrls: ['./single-resource-not-found.component.css']
})
export class SingleResourceNotFoundComponent {

  constructor (public userlist:GetListUserService){}

  singleUserValue:any;
  singleResourceNotFoundValue :any;
  getSingleResourceNotFounded(){
    alert("Failed to load resource: the server responded with a status of 404 ");
      this.singleUserValue=true;
      this.userlist.getSingleResourceNotFound().subscribe((data)=>{
      this.singleResourceNotFoundValue = data;
      console.warn("Single Resource Not Found",data);
      
      });}


}
