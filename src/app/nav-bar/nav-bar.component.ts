import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() setPage = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log(this.setPage)
  }

  updatePage(newPage: string) {
    this.setPage.emit(newPage)
    
  }

}
