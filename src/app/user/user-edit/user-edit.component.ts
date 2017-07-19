import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from "@angular/forms";

import {User} from "../user";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() user: User;
  @Output() updateUserEvent = new EventEmitter();

  userEdit: User = new User();
  heroUser = new FormGroup({
    name: new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(3),
      //Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    username: new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(3),
      //Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    email: new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(3),
      //Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    phone: new FormControl("",Validators.compose([
      Validators.required,
      Validators.minLength(3),
      //Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    isok: new FormControl(true),
    id: new FormControl("")
  });


  constructor() {
  }

  ngOnInit() {
    //Object.assign(this.userEdit, this.user);
  }

  update(user){

    //let data = JSON.stringify(user);
    this.updateUserEvent.emit(user)
    //console.log(user)
    this.userEdit.editable = false;
    //this.updateUserEvent.emit({original: this.user, edited: this.userEdit})
  }
}
