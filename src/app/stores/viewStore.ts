import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';
import { runInAction } from 'mobx';
import { User } from '../user';

@Injectable()
export class ViewStore {
    @observable text: string = 'mobx store connected to angular component';
    @observable users: User[] = [];
    @observable selectedUser: User = null;
    @observable fetchingData;
    usersUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(){}

    @computed get userCount(){
        return this.users.length;
    }

    @action('Fetch users')
    fetchUsers = async () => {
        this.fetchingData = true;
        const [users] = await Promise.all([
            this.fetchFromApi(this.usersUrl)
        ]);
        runInAction("Update State after fetching Users from API", () => {
            this.setUsers(users);
            this.fetchingData = false;
        });

    }

    @action('Fetch user')
    fetchUser = async (id) => {
        this.fetchingData = true;
        const [user] = await Promise.all([
            this.fetchFromApi(`${this.usersUrl}/${id}`)
        ]);
        runInAction("Update State after fetching User from API", () => {
            this.setUser(user);
            this.fetchingData = false;
        });

    }

    async fetchFromApi(endpoint) {
        const url = endpoint;
        const response = await fetch(url);
        return await response.json();
    }    

    @action('Set users')
    setUsers(users) {
        this.users = users;
    }

    @action('Set user')
    setUser(user) {
        this.users = [user];
        this.selectedUser = user;
    }

    @action('Unselect user')
    unselectUser() {
        this.selectedUser = null;
    }

    @action('Remove user')
    removeUser(user) {
        console.log(user.name);
        this.users = this.users.filter(u => u !== user);
    }
}