import { Component } from '@angular/core';
import { GetListUserService } from '../services/get-list-user.service';

@Component({
  selector: 'app-get-list-user',
  templateUrl: './get-list-user.component.html',
  styleUrls: ['./get-list-user.component.css']
})
export class GetListUserComponent {

  constructor(public userlist: GetListUserService) {
    this.show = true;
    this.userlist.GetList().subscribe((data) => {
      console.warn("data", data);
      this.listuser = data;
    })

  }
  show: any;
  listuser: any;

}
