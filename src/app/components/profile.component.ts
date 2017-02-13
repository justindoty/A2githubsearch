import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  {
    userInfo: any;
    repos: any[];
    username: string;

    constructor(private _githubservice: GithubService) {
        this.userInfo = false;
        }

        searchUser() {

        this._githubservice.updateUser(this.username);    

        this._githubservice.getUser().subscribe(user => {
        console.log(user);
        this.userInfo = user;
        })

        this._githubservice.getRepos().subscribe(repos => {
            this.repos = repos;
        })

        }
    
}