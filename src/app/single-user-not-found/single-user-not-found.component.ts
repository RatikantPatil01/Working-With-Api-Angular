import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-single-user-not-found',
  templateUrl: './single-user-not-found.component.html',
  styleUrls: ['./single-user-not-found.component.css']
})
export class SingleUserNotFoundComponent {

  constructor (public userlist:GetListUserService){
    alert("Failed to load resource: the server responded with a status of 404 ");
      this.singleUserValue=true;
      this.userlist.singleUserNotFound().subscribe((data)=>{
      this.singleUserNotFound = data;
      console.warn("Here",data);
      });
  }

  singleUserValue=false;
  singleUserNotFound :any;
  getSingleUserNotFound(){
    }


}
