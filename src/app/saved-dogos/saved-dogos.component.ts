import { Component, OnInit } from '@angular/core';

import { UpdateSavedDogosService } from '../services/update-saved-dogos.service';

@Component({
  selector: 'app-saved-dogos',
  templateUrl: './saved-dogos.component.html',
  styleUrls: ['./saved-dogos.component.css']
})
export class SavedDogosComponent implements OnInit {

  savedDogos = this.updateSavedDogos.savedDogos

  constructor(
    private updateSavedDogos: UpdateSavedDogosService
  ) { }

  ngOnInit(): void {
    /*for(let i = 0; i < 15; i++) {
      this.savedDogos.push({url: 'https://images.dog.ceo/breeds/chow/n02112137_7645.jpg', id: 73})
    }*/
  }

}
