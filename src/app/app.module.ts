import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserNewComponent} from "./user/user-new/user-new.component";
import {UserService} from "./user/user.service";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import { UserDialogComponent } from './user/user-dialog/user-dialog.component';
import { AlertComponent } from './user/alert/alert.component'
import {AlertService} from "./user/alert.service";

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailsComponent,
        UserListComponent,
        UserNewComponent,
        UserEditComponent,
        UserDialogComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [UserService,AlertService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
