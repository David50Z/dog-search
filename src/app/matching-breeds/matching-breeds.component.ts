import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { SimpleChange } from '@angular/core';

@Component({
  selector: 'app-matching-breeds',
  templateUrl: './matching-breeds.component.html',
  styleUrls: ['./matching-breeds.component.css']
})
export class MatchingBreedsComponent implements OnInit {

  breeds: any = []

  @Input() inputField!: string

  @Output() dogoCall = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    fetch(/*`http://localhost:3000/api/breeds`*/'https://dog.ceo/api/breeds/list/all')
    .then(res => {return res.json()})
    .then(data => {
      let breeds = Object.keys(data.message)
      let first5 = []

      //BEGINING OF FORLOOP

      for(let i = 0; i < breeds.length; i++) {
        if(first5.length > 5) {
          console.log('all full up')
          break
        }
        let breed = breeds[i]
        let condition = breed.includes(this.inputField.toLocaleLowerCase())
        console.log(condition)
        if(condition) {
          console.log(i)
          first5.push(breeds[i])
        }
      }
      //END OF FORLOOP

    
      
      console.log(first5[1])
      if(first5) {
        this.breeds = first5
      } else {
        this.breeds = []
      }
    })
  }

  ngOnChanges(changes: SimpleChange) {
    this.getBreeds()
  }

  getBreeds() {
    fetch(/*`http://localhost:3000/api/breeds`*/'https://dog.ceo/api/breeds/list/all')
    .then(res => {return res.json()})
    .then(data => {
      let breeds = Object.keys(data.message)
      let first5 = []

      //BEGINING OF FORLOOP

      for(let i = 0; i < breeds.length; i++) {
        if(first5.length > 5) {
          console.log('all full up')
          break
        }
        let breed = breeds[i]
        let condition = breed.includes(this.inputField.toLocaleLowerCase())
        console.log(condition)
        if(condition) {
          console.log(i)
          first5.push(breeds[i])
        }
      }
      //END OF FORLOOP

    
      
      console.log(first5[1])
      if(first5) {
        this.breeds = first5
      } else {
        this.breeds = []
      }
    })
  }

}
