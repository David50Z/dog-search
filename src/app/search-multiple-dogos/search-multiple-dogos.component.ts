import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { UpdateSavedDogosService } from '../services/update-saved-dogos.service';

@Component({
  selector: 'app-search-multiple-dogos',
  templateUrl: './search-multiple-dogos.component.html',
  styleUrls: ['./search-multiple-dogos.component.css']
})
export class SearchMultipleDogosComponent implements OnInit {

  @Input() matchingBreeds!: boolean

  @Output() toggleBreeds = new EventEmitter()

  @Output() activateFullImg = new EventEmitter()

  dogoImgs: string[] = /*['https://images.dog.ceo/breeds/chow/n02112137_7645.jpg', 'https://images.dog.ceo/breeds/chow/n02112137_7645.jpg']*/[]

  submitForm = this.formBuilder.group({
    dogo: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private updateSavedDogos: UpdateSavedDogosService
  ) { }

  ngOnInit(): void {
  }

  async dogoCall(dogoName: any) {

    let dogoArr = dogoName?.split('') || [];

    for(let i = 0; i < dogoArr.length; i++) {
      if(dogoArr[i] === ' ') {
        dogoArr[i] = '-'
      }
    }

    let dogo = dogoArr.join("")
    console.log(`https://dog-search-app.herokuapp.com/api/all/${dogo.toLocaleLowerCase()}`)

    //console.log(`http://localhost:3000/api/${this.submitForm.value.dogo}`)
    fetch(`https://dog-search-app.herokuapp.com/api/all/${dogo.toLocaleLowerCase()}`)
      .then(res => {
        //console.log(`http://localhost:3000/api/${this.submitForm.value.dogo}`)
        return res.json()
      })
      .then(data => {
        if(data.message === 'Breed not found (master breed does not exist)') {
          this.dogoImgs = ['Breed not found (master breed does not exist)']
        } else {
          this.dogoImgs = data.message
        }
        //console.log(data)
        //console.log(this.dogoImgs + 'hello')
        return this.dogoImgs
      })
  }

  saveDogo(url: string) {
    this.updateSavedDogos.saveDogo(url)
  }

  /*toggleBreeds(event: any) {
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
  }*/

}
