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

  fullImage: boolean = false

  imgUrl!: string | Event

  matchingBreeds: boolean = false

  menu = 30

  noNav = false

  hamburgerDeg = 90

  rightSide = 100 - this.menu

  page = 'description'

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

  toggleBreeds(event: any) {
    this.matchingBreeds = true
    //console.log(this.matchingBreeds)
    let condition = event.path

    //console.log(String(condition[0]))

    if(String(condition[0]) === '[object HTMLInputElement]') {
      this.matchingBreeds = true
      console.log('matching breeds on')
      console.log(String(condition[0]))

    } else {
      this.matchingBreeds = false
      console.log('matching breeds off')
      console.log(String(condition[0]))
    }
  }

  activateFullImg(url: string | Event) {
    this.fullImage = true
    this.imgUrl = url
    console.log('activateFullImg ran')
    console.log(this.fullImage)
  }

  disactivateFullImg() {
    this.fullImage = false
  }

}
