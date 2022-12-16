import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-post-register-unsucessfull-api',
  templateUrl: './post-register-unsucessfull-api.component.html',
  styleUrls: ['./post-register-unsucessfull-api.component.css']
})
export class PostRegisterUnsucessfullApiComponent {
  postRegistrationData:any;
  divValue = true;
  divValue2 = false;
  constructor(public getPostFail : GetListUserService){
    this.getPostFail.postRegistrationUnsuccessfullApi().subscribe((data)=>{
      this.postRegistrationData=data;
      console.warn("Post-Registration-unsucessfull-Data-With-Api",data)
    });
    
  }

  getPostRegistratiohUnsucessfullApi(data:any){
    alert("Missing password");
    this.divValue=false;
    this.divValue2=true;
    this.getPostFail.sendPostRegestrationUnsuccessfull(data).subscribe((data)=>{
      console.warn(data);
    

  })
}
}
