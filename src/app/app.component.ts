import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = 30

  noNav = false

  hamburgerDeg = 90

  rightSide = 100 - this.menu

  page = 'search-dogo'

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.reduce()
  }

  reduce() {
    setInterval(() => {
      //this.noNav = !this.noNav
      //console.log(this.noNav)
    }, 2000);
  }

  toggleNav() {
    this.noNav = !this.noNav

    if(this.hamburgerDeg === 90) {
      this.hamburgerDeg = 0
    } else {
      this.hamburgerDeg = 90
    }
  }

  setPage(newPage: string) {
    this.page = newPage
    console.log('parent function ran')
  }

}
