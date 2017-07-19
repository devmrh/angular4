import {Injectable} from "@angular/core";
import {User} from "./user";
import {Http} from "@angular/http";
import "rxjs";
import {Observable} from "rxjs"

@Injectable()
export class UserService {

    constructor(private _http: Http) {
    }

    create(user) {
        return this._http.post('http://localhost/api/create.php', user)
    }

    ndelete(user) {
        return this._http.post('http://localhost/api/delete.php', {'id': user}).map(() => this.getUsers())
    }

    update(user) {
        return this._http.post('http://localhost/api/update.php', user).map(()=>"");
    }

    getUsers() {
        return this._http.get("http://localhost/api/getAll.php").map(data => data.json())
    }

    // getUser(user: User): Observable <User> {
    //   return this._http.get("/users/"+user.id).map(data => data.json()).map(data => data.json()).catch((error: any)=> Observable.throw(error.json().error || 'Error'))
    // }
}
