import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateSavedDogosService {

  savedDogos: {id: number, url: string}[] = []

  saveDogo(url: string) {
    let id = Math.floor((Math.random()* 998) + 1)
    this.savedDogos.push({id: id, url: url})
    console.log({id: id, url: url})
  }

  constructor() { }
}
