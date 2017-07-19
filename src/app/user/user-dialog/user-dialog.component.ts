///<reference path="../../../../node_modules/@angular/core/src/animation/animation_metadata_wrapped.d.ts"/>
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style([{ transform: 'scale3d(.01, .01, 0.9)' }]),
        animate(100)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'scale3d(.1, .1, .0)' }))
      ])
    ])
  ]
})
export class UserDialogComponent implements OnInit {

  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cholo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  create(user){
    this.cholo.emit(user);
    this.visibleChange.emit(this.visible = false);
  }
}
