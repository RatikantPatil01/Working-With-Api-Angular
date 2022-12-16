import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-post-registration-api',
  templateUrl: './post-registration-api.component.html',
  styleUrls: ['./post-registration-api.component.css']
})
export class PostRegistrationApiComponent {
  postRegistrationData:any;
  divValue = true;
  divValue2 = false;
  constructor(public getPost:GetListUserService){
    this.getPost.postRegistrationApi().subscribe((data)=>{
      this.postRegistrationData=data;
      console.warn("Post-Registration-Data-With-Api",data)
    });
    
  }

  getPostRegistratiohApi(data:any){
    this.divValue=false;
    this.divValue2=true;
    this.getPost.sendPostRegestration(data).subscribe((data)=>{
      console.warn(data);
    alert("Registration Successfull")

  })
}
}
