import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';
import { Posts } from '../posts';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patch-update-api',
  templateUrl: './patch-update-api.component.html',
  styleUrls: ['./patch-update-api.component.css']
})
export class PatchUpdateApiComponent {

  patchData:any;
  data:any;
  data2:any;
  show=false;

  constructor (public patch:GetListUserService,public http:HttpClient){
    this.patch.patchDataWithApi().subscribe((data)=>{
      this.patchData=data;
      console.warn("patchData",data)
    });
  }

  getUserPatchData(data:any){
    console.warn("patch-api-data")
    this.show=true;
    const id = 2;
     this.http.put("https://reqres.in/api/users"+"/"+id,data).subscribe((data)=>{
      console.warn(data)
      this.data2=data;
      alert("User Patch Data Updated SucessFully")
    })
    }
  }

  
