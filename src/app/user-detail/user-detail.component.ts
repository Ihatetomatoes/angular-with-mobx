import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//import { UserService } from '../user.service';
import {ViewStore} from '../stores/viewStore'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public viewStore: ViewStore
  ) { }

  ngOnInit() {
    if(!this.viewStore.selectedUser){
      this.getUser();
    }
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.viewStore.fetchUser(id);
    // this.userService.getUser(id)
    //   .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.viewStore.unselectUser();
    this.location.back();
  }

}
