import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http : HttpClient) {}

  private usersUrl = 'https://jsonplaceholder.typicode.com/users'; // URL to web api

  getUsers() : Observable < User[] > {
    return this.http.get < User[] > (this.usersUrl);
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id : number) : Observable < User > {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get < User > (url)
  }

}
