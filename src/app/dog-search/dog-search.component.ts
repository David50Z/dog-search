import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { UpdateSavedDogosService } from '../services/update-saved-dogos.service';

@Component({
  selector: 'app-dog-search',
  templateUrl: './dog-search.component.html',
  styleUrls: ['./dog-search.component.css']
})
export class DogSearchComponent implements OnInit {

  title = 'dog-search';

  dogoImg = /*"https://images.dog.ceo/breeds/chow/n02112137_7645.jpg"*/""

  color = 'rgb(17, 108, 218)'

  submitForm = this.formBuilder.group({
    dogo: ""
  })

  ROOT_URL = 'http://localhost:3000/api'

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private updateSavedDogos: UpdateSavedDogosService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.submitForm.value.dogo)
  }
/*'https://dog.ceo/api/breed/affenpinscher/images/random'*/
  async dogoCall(dogoName: any) {

    let dogoArr = dogoName?.split('') || [];

    for(let i = 0; i < dogoArr.length; i++) {
      if(dogoArr[i] === ' ') {
        dogoArr[i] = '-'
      }
    }

    let dogo = dogoArr.join("")
    console.log(`http://localhost:3000/api/${dogo.toLocaleLowerCase()}`)

    //console.log(`http://localhost:3000/api/${this.submitForm.value.dogo}`)
    fetch(`http://localhost:3000/api/${dogo.toLocaleLowerCase()}`)
      .then(res => {
        //console.log(`http://localhost:3000/api/${this.submitForm.value.dogo}`)
        return res.json()
      })
      .then(data => {
        this.dogoImg = data.message
        //console.log(data)
        //console.log(this.dogoImg + 'hello')
        if(this.dogoImg !== 'Breed not found (master breed does not exist)') {
          this.submitForm.value.dogo = ""
        }
        return this.dogoImg
      })
  }

  saveDogo(url: string) {
    this.updateSavedDogos.saveDogo(url)
  }

}
