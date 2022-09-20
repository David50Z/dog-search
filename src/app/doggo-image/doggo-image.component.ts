import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doggo-image',
  templateUrl: './doggo-image.component.html',
  styleUrls: ['./doggo-image.component.css']
})
export class DoggoImageComponent implements OnInit {

  @Input() src!: string

  @Output() activateFullImg = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

}
