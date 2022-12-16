import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {

  constructor (public userlist:GetListUserService){
    this.singleUserValue=true;
      this.userlist.GetSingleUser().subscribe((data)=>{
      this.singleUser = data;
      console.warn("Here",data);
      });
  }

 
  singleUserValue:any;
  singleUser :any;
  }
