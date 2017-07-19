import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {User} from "../user";
import {FormControl, FormGroup, Validators,FormBuilder} from "@angular/forms";
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import {AlertService} from "../alert.service";

@Component({
    selector: 'app-user-new',
    templateUrl: './user-new.component.html',
    styleUrls: ['./user-new.component.css'],
    styles: [`        

        .bl {
            background: grey !important;
            color: #cecece !important;
            cursor: not-allowed !important;
        }

        span {
            display: inline-block;
            border-bottom: 1px solid #aaa;
            color: white;
            background: red;
            padding: 5px;
            border-radius: 20px;
        }

        .gr {
            background: green !important;
        }

        input[type=text] {
            padding: 10px 0;
            width: 100%;
            margin: 5px 0;
        }

        input[type=submit] {
            background: #45c100;
            text-align: center;
            padding: 10px;
            border-radius: 10px;
            margin-right: 50%;
            color: white;
            font-weight: bold;
            text-shadow: 1px 2px black;
            cursor: pointer;
        }

        .bot {
            border: 1px solid #c5102e;
        }`],
    animations: [
    trigger('heroState', [
        state('void', style({
            backgroundColor: '#eee',
            transform: 'scale(1.2)',
            padding: '10px'
        })),
        state('*',style({
            backgroundColor: '#cfd8dc',
            transform: 'scale(1)',
            bottom: '100px'

        })),
        transition('* <=> void', animate('1s ease-in-out'))
    ])
]

})


export class UserNewComponent implements OnInit {


    // heroUser: FormGroup;
    // name: FormControl;
    // username: FormControl;
    // email: FormControl;
    // phone: FormControl;
    // submitAttempt: boolean = false;



    reg = new User();

    heroUser = new FormGroup({
        name: new FormControl(" ",Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10)
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
            Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ])),
        phone: new FormControl("",Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.pattern(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/,

            )
        ])),
        isok: new FormControl(true)
    });


    @Output() createNewUserEvent = new EventEmitter();

    constructor(private alertservice: AlertService) {}



    ngOnInit() {
    }


    create(user) {
        this.createNewUserEvent.emit(user);
        this.reg.adding = false;
        console.log(user);
        this.heroUser.reset();
        this.alertservice.success("شما با موفقیت ثبت نام کردید");

    }


}


