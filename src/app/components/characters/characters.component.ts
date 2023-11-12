import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public allCharacters: Array<Character> = []
  public characters: Array<Character> = []
  public searchTerm: string = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data) => {
      this.allCharacters = data.results;
      this.characters = data.results;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.characters = this.allCharacters.filter((character) => {
      return character.name.toLowerCase().includes(value)
    });
  }
}
