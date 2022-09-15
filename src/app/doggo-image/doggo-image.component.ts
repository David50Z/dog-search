import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doggo-image',
  templateUrl: './doggo-image.component.html',
  styleUrls: ['./doggo-image.component.css']
})
export class DoggoImageComponent implements OnInit {

  @Input() src!: string

  constructor() { }

  ngOnInit(): void {
  }

}
