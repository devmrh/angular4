import {Component, OnInit} from "@angular/core";
import {User} from "./user";
import {UserService} from "./user.service";
import {AlertService} from "./alert.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    // users: Array<User> = [
    //     new User(1, 'fist', 'last', 'aa@aa.com'),
    //     new User(2, 'second', '2last', 'aa@aa.com'),
    //     new User(3, 'third', '3last', 'aa@aa.com')
    //
    // ];

    users: Array<User>;

     showDialog = false;

    constructor(private _userService: UserService) {

    }

    ngOnInit() {

        this.getUsers();
        // this.destroy();
    }

    create(user) {
        let data = JSON.stringify(user);
        this._userService.create(data).subscribe(
            () => this.getUsers(),
        error => alert('خطا در برقراری ارتباط با API '+error.json().message)
        )

    }

    destroy(id) {
        this._userService.ndelete(id.id).subscribe(() => this.getUsers())

    }


     update(user) {
        let data = JSON.stringify(user);

         console.log(user);
         this._userService.update(data).subscribe(
             () => this.getUsers())
    }

    getUsers() {
        this._userService.getUsers()
            .subscribe(users => {
                this.users = users
            });

    }


}
