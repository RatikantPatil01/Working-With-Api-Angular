import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeleteApiComponent } from './delete-api/delete-api.component';
import { GetDelayedResponseApiComponent } from './get-delayed-response-api/get-delayed-response-api.component';
import { GetListResourceComponent } from './get-list-resource/get-list-resource.component';
import { GetListUserComponent } from './get-list-user/get-list-user.component';
import { PatchUpdateApiComponent } from './patch-update-api/patch-update-api.component';
import { PostDataApiComponent } from './post-data-api/post-data-api.component';
import { PostLoginSuccessfullComponent } from './post-login-successfull/post-login-successfull.component';
import { PostLoginUnsuccessfullComponent } from './post-login-unsuccessfull/post-login-unsuccessfull.component';
import { PostRegisterUnsucessfullApiComponent } from './post-register-unsucessfull-api/post-register-unsucessfull-api.component';
import { PostRegistrationApiComponent } from './post-registration-api/post-registration-api.component';
import { PutUpdateApiComponent } from './put-update-api/put-update-api.component';
import { SingleResourceNotFoundComponent } from './single-resource-not-found/single-resource-not-found.component';
import { SingleResourceComponent } from './single-resource/single-resource.component';
import { SingleUserNotFoundComponent } from './single-user-not-found/single-user-not-found.component';
import {SingleUserComponent} from './single-user/single-user.component'

const routes: Routes = [
  {
    component:GetListUserComponent,
    path: 'get-list-user'
  },
  {
    component:AppComponent,
    path: ''
  },
  {
    component:SingleUserComponent,
    path: 'single-user'
  },
  {
    component:SingleUserNotFoundComponent,
    path: 'single-user-not-found'
  },
  {
    component:GetListResourceComponent,
    path: 'get-list-resource'
  },
  {
    component:SingleResourceComponent,
    path: 'get-single-resource'
  },
  {
    component:SingleResourceNotFoundComponent,
    path: 'single-resource-not-found'
  },
  {
    component:PostDataApiComponent,
    path: 'post-data-api'
  },
  {
    component:PutUpdateApiComponent,
    path: 'put-update-api'
  },
  {
    component:PatchUpdateApiComponent,
    path: 'patch-update-api'
  },
  {
    component:DeleteApiComponent,
    path: 'delete-api'
  },
  {
    component:PostRegistrationApiComponent,
    path: 'post-registration-api'
  },
  {
    component:PostRegisterUnsucessfullApiComponent,
    path: 'post-register-unsucessfull-api'
  },
  {
    component:PostLoginSuccessfullComponent,
    path: 'post-login-successfull'
  },
  {
    component:PostLoginUnsuccessfullComponent,
    path: 'post-login-unsuccessfull'
  },
  {
    component:GetDelayedResponseApiComponent,
    path: 'get-delayed-response-api'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
