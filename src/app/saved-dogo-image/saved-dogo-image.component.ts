import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saved-dogo-image',
  templateUrl: './saved-dogo-image.component.html',
  styleUrls: ['./saved-dogo-image.component.css']
})
export class SavedDogoImageComponent implements OnInit {

  @Input() src!: string

  constructor() { }

  ngOnInit(): void {
  }

}
