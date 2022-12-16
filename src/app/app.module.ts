import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GetListUserService } from './services/get-list-user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetListUserComponent } from './get-list-user/get-list-user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { SingleUserNotFoundComponent } from './single-user-not-found/single-user-not-found.component';
import { GetListResourceComponent } from './get-list-resource/get-list-resource.component';
import { SingleResourceComponent } from './single-resource/single-resource.component';
import { SingleResourceNotFoundComponent } from './single-resource-not-found/single-resource-not-found.component';
import { PostDataApiComponent } from './post-data-api/post-data-api.component';
import { PutUpdateApiComponent } from './put-update-api/put-update-api.component';
import { PatchUpdateApiComponent } from './patch-update-api/patch-update-api.component';
import { DeleteApiComponent } from './delete-api/delete-api.component';
import { PostRegistrationApiComponent } from './post-registration-api/post-registration-api.component';
import { PostRegisterUnsucessfullApiComponent } from './post-register-unsucessfull-api/post-register-unsucessfull-api.component';
import { PostLoginSuccessfullComponent } from './post-login-successfull/post-login-successfull.component';
import { PostLoginUnsuccessfullComponent } from './post-login-unsuccessfull/post-login-unsuccessfull.component';
import { GetDelayedResponseApiComponent } from './get-delayed-response-api/get-delayed-response-api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GetListUserComponent,
    SingleUserComponent,
    SingleUserNotFoundComponent,
    GetListResourceComponent,
    SingleResourceComponent,
    SingleResourceNotFoundComponent,
    PostDataApiComponent,
    PutUpdateApiComponent,
    PatchUpdateApiComponent,
    DeleteApiComponent,
    PostRegistrationApiComponent,
    PostRegisterUnsucessfullApiComponent,
    PostLoginSuccessfullComponent,
    PostLoginUnsuccessfullComponent,
    GetDelayedResponseApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [GetListUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
