import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { UpdateSavedDogosService } from '../services/update-saved-dogos.service';

@Component({
  selector: 'app-search-multiple-dogos',
  templateUrl: './search-multiple-dogos.component.html',
  styleUrls: ['./search-multiple-dogos.component.css']
})
export class SearchMultipleDogosComponent implements OnInit {

  dogoImgs: string[] = ['https://images.dog.ceo/breeds/chow/n02112137_7645.jpg', 'https://images.dog.ceo/breeds/chow/n02112137_7645.jpg']

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
    console.log(`http://localhost:3000/api/all/${dogo.toLocaleLowerCase()}`)

    //console.log(`http://localhost:3000/api/${this.submitForm.value.dogo}`)
    fetch(`http://localhost:3000/api/all/${dogo.toLocaleLowerCase()}`)
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

}
