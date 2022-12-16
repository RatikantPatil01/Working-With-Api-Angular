import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../posts';


@Injectable({
  providedIn: 'root'
})
export class GetListUserService {

  patchUpdateData={
    name:"Ratikant",
    job:"Hero"
  }

  constructor(public http:HttpClient) { }

  // ===================================================This Code For Get-List-Users-Api===============================================

  get_list_users_url="https://reqres.in/api/users?page=2";

  GetList(){
    return this.http.get(this.get_list_users_url);
  }

 // ====================================================This Code For Get-Single-User-Api==============================================
 
  get_single_user_url="https://reqres.in/api/users/2";
 public GetSingleUser(){
    return this.http.get(this.get_single_user_url);

  }

   // =============================================This Code For Get-Single-user-not-found-api=========================================

  get_single_user_not_found_url="https://reqres.in/api/users/23";

  singleUserNotFound(){
    return this.http.get(this.get_single_user_not_found_url);
  }

 //==================================================== This Code For Get-List-Resource-Api=============================================

  get_list_resource_url="https://reqres.in/api/unknown";
  getListResource(){
    return this.http.get(this.get_list_resource_url);
  }

   // ===============================================This Code For Get-Single-Resource=================================================

  get_single_resource_url="https://reqres.in/api/unknown/2";
  getSingleListResource(){
    return this.http.get(this.get_single_resource_url)
  }

 // ===========================================This Code For Get-Single-Resource-Not-Found-Api=========================================

  get_single_resource_not_found_url="https://reqres.in/api/unknown/23";
  getSingleResourceNotFound(){
    return this.http.get(this.get_single_resource_not_found_url)
  }

 // =======================================================This Code For Post-Data-Api================================================

  get_post_data_api_url="https://reqres.in/api/users";
  postApiWithData(){
    return this.http.get(this.get_post_data_api_url);
  }

  //================================================== This Code For Posting Data In Api==============================================
  saveUser(data:any){
    return this.http.post(this.get_post_data_api_url,data)
  }

 //======================================================This Code For Put Update Api ==================================================

 putApiWithData(){
  return this.http.get("https://reqres.in/api/users/2");
}

//=======================================================This Code For Patch Update Api ==================================================


patchDataWithApi()
{
  return this.http.get("https://reqres.in/api/users/2")
}

//=========================================================This Code For Delete Api ========================================================

deleteDataApi(id : number){
  return this.http.delete("https://reqres.in/api/users"+"/"+id);
}

//====================================================This Code For Post Registration Api =========================================

post_resgistration_api="https://reqres.in/api/register"
postRegistrationApi(){
  return this.http.get(this.post_resgistration_api)
}

sendPostRegestration(data:any){
  console.warn(data)
  return this.http.post("https://reqres.in/api/register",data);
}
//==============================================This Code For Post Registration Unsuccessfull Api ===============================

post_resgistration_unsuccessfull_api="https://reqres.in/api/register"
postRegistrationUnsuccessfullApi(){
  return this.http.get(this.post_resgistration_unsuccessfull_api)
}

sendPostRegestrationUnsuccessfull(data:any){
  console.warn(data)
  return this.http.post("https://reqres.in/api/register",data);
}

//============================================This Code For Post Login Successfull Api ==========================================

post_login_successfull_api="https://reqres.in/api/login"
postLoginSuccessfull(){
  return this.http.get(this.post_login_successfull_api)
}

sendPostLoginSuccessfull(data:any){
  console.warn(data)
  return this.http.post("https://reqres.in/api/login",data);
}

//=========================================This Code For Post Login Unsuccessfull Api =============================================

post_login_unsuccessfull_api="https://reqres.in/api/login"
postLoginUnsuccessfull(){
  return this.http.get(this.post_login_unsuccessfull_api)
}

sendPostLoginUnsuccessfull(data:any){
  console.warn(data)
  return this.http.post("https://reqres.in/api/login",data);
}

//==========================================This Code For Get Delayed Response Api =================================================

get_delayed_response_url="https://reqres.in/api/users?delay=3";

GetDelayedResponse(){
  return this.http.get(this.get_delayed_response_url);
}

}



