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
        return this._http.post('http://angularjscrud-angularcrud.7e14.starter-us-west-2.openshiftapps.com/api/create.php', user)
    }

    ndelete(user) {
        return this._http.post('http://angularjscrud-angularcrud.7e14.starter-us-west-2.openshiftapps.com/api/delete.php', {'id': user}).map(() => this.getUsers())
    }

    update(user) {
        return this._http.post('http://angularjscrud-angularcrud.7e14.starter-us-west-2.openshiftapps.com/api/update.php', user).map(()=>"");
    }

    getUsers() {
        return this._http.get("http://angularjscrud-angularcrud.7e14.starter-us-west-2.openshiftapps.com/api/getAll.php").map(data => data.json())
    }

    // getUser(user: User): Observable <User> {
    //   return this._http.get("/users/"+user.id).map(data => data.json()).map(data => data.json()).catch((error: any)=> Observable.throw(error.json().error || 'Error'))
    // }
}
