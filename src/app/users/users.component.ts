import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user';
//import {UserService} from '../user.service'
import {ViewStore} from '../stores/viewStore'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    public viewStore: ViewStore
    //private userService: UserService
  ) { }

  ngOnInit() {
    if(this.viewStore.users.length <= 1){
      this.viewStore.fetchUsers();
    }
  }

}
