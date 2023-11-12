import { CharacterService } from 'src/app/services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit  {

  public character: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  }
  public id: string = '';

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
      }
    );
    this.characterService.getCharacter(Number(this.id)).subscribe((data) => {
      console.log(data);
      this.character = data;
    });

  }

}
