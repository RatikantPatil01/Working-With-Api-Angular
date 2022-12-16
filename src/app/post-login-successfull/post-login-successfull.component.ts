import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-post-login-successfull',
  templateUrl: './post-login-successfull.component.html',
  styleUrls: ['./post-login-successfull.component.css']
})
export class PostLoginSuccessfullComponent {
  postRegistrationData:any;
  divValue = true;
  divValue2 = false;
  constructor(public postLogin:GetListUserService){
    this.postLogin.postLoginSuccessfull().subscribe((data)=>{
      this.postRegistrationData=data;
      console.warn("Post-Registration-Data-With-Api",data)
    });
    
  }

  getPostLoginApi(data:any){
    this.divValue=false;
    this.divValue2=true;
    this.postLogin.sendPostLoginSuccessfull(data).subscribe((data)=>{
      console.warn(data);
    alert("Login Successfull")

  })
}
}
