import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-post-data-api',
  templateUrl: './post-data-api.component.html',
  styleUrls: ['./post-data-api.component.css']
})
export class PostDataApiComponent {
  apipostdata:any;
  constructor(public postdata:GetListUserService){
    this.postdata.postApiWithData().subscribe((data)=>{
      this.apipostdata=data;
      console.warn("Post-Data-With-Api",data)
    });
  }
    getUserFormData(data:any){
      this.postdata.saveUser(data).subscribe((results)=>{
        console.warn(results);
      })
    }


  }


