import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css']
})
export class FullImageComponent implements OnInit {

  @Input() url!: string | Event

  @Output() disactivateFullImg = new EventEmitter()

  //url = "https://images.dog.ceo/breeds/chow/n02112137_7645.jpg"

  constructor() { }

  ngOnInit(): void {
    console.log(this.url + 'hello!')
  }

  clicky(event: Event) {
    console.log(String(event.composedPath()[0]))
  }
}
