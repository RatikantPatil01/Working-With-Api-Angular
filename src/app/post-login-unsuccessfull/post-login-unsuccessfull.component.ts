import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-post-login-unsuccessfull',
  templateUrl: './post-login-unsuccessfull.component.html',
  styleUrls: ['./post-login-unsuccessfull.component.css']
})
export class PostLoginUnsuccessfullComponent {

  postRegistrationData:any;
  divValue = true;
  divValue2 = false;
  constructor(public postLogin:GetListUserService){
    this.postLogin.postLoginUnsuccessfull().subscribe((data)=>{
      this.postRegistrationData=data;
      console.warn("Post-Registration-Data-With-Api",data)
    });
    
  }

  getPostLoginUnsuccessfullApi(data:any){
    this.divValue=false;
    this.divValue2=true;
    alert("ERROR ( 400 ) : Missing Password")
    this.postLogin.sendPostLoginUnsuccessfull(data).subscribe((data)=>{
      console.warn(data);
    

  })
}
}
