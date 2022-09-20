import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saved-dogo-image',
  templateUrl: './saved-dogo-image.component.html',
  styleUrls: ['./saved-dogo-image.component.css']
})
export class SavedDogoImageComponent implements OnInit {

  @Input() src!: string

  @Output() activateFullImg = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

}
