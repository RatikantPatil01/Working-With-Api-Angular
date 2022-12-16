import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-delete-api',
  templateUrl: './delete-api.component.html',
  styleUrls: ['./delete-api.component.css']
})
export class DeleteApiComponent {
  UserValue=true;

  constructor(public deleteData:GetListUserService){}

  onDelete(id:number){
    this.UserValue=false;
    if(confirm('Are you sure to delete ?')){
      this.deleteData.deleteDataApi(id).subscribe(res=>{
        console.log("Data Deleted ");
        alert("Data Deleted Successfully :) ")
      });
    }
  }

}
