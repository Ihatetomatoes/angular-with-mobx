import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MobxAngularModule } from 'mobx-angular';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { ViewStore } from './stores/viewStore';
import { AppRoutingModule } from './/app-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MobxAngularModule
  ],
  providers: [UserService, ViewStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
