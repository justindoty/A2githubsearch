import {Injectable} from '@angular/core';
import{Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 

export class GithubService {
    private username:string;
    private client_id = '96bb94aa307d4d3338f9';
    private client_secret = 'ea8679a991d62cd521c9248f069d093f7bdfa09e';

    constructor(private _http: Http) {
        console.log('Github Service Ready.....');
        this.username = 'justindoty';
    }

    getUser() {
      
        
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
        
        
        
    }

    getRepos() {
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}

