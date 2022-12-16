import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-put-update-api',
  templateUrl: './put-update-api.component.html',
  styleUrls: ['./put-update-api.component.css']
})
export class PutUpdateApiComponent {

  constructor(public http:HttpClient){
    this.http.get("https://reqres.in/api/users/2").subscribe((data)=>{
      this.putData = data ;
      console.warn("Put-Update-Api",data)
    })
 
  }
  putData : any;

  editPutData(data:any){
    const id = 2;
    this.http.put("https://reqres.in/api/users/2",data).subscribe((results)=>{
      console.warn(results)
      alert("User Data Updated SucessFully")
    })
  }
  
}
