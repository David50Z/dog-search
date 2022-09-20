import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateSavedDogosService {

  savedDogos: {id: number, url: string}[] = JSON.parse(localStorage.getItem("dogos") || '[]')

  saveDogo(url: string) {
    let id = Math.floor((Math.random()* 998) + 1)
    this.savedDogos.push({id: id, url: url})
    console.log({id: id, url: url})

    localStorage.setItem("dogos", JSON.stringify(this.savedDogos))
  }

  removeDogo(id: number) {
    console.log(id + ' id arg')
    for(let i = 0; i < this.savedDogos.length; i++) {
      console.log(this.savedDogos[i].id + ' current id')
      if(this.savedDogos[i].id === id) {
        
        //console.log(this.savedDogos[i].id + ' matching id')
        console.log(this.savedDogos[i].id + ' ' + id)
        this.savedDogos.splice(i, 1)
      }
    }

    console.log('END OF LOOP')
    localStorage.setItem("dogos", JSON.stringify(this.savedDogos))
  }

  constructor() { }
}
