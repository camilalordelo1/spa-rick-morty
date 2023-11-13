import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public allCharacters: Array<Character> = [];
  public characters: Array<Character> = [];
  public searchTerm: string = '';

  valueFilterSearch = '';
  valueFilterStatus = '0';
  valueFilterSpecie = '0';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data) => {
      this.allCharacters = data.results;
      this.characters = data.results;
    });
  }

  filterBySearch(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.valueFilterSearch = value;

    this.loadByFilters();
  }

  filterBySpecie(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.valueFilterSpecie = value;

    this.loadByFilters();
  }

  filterByStatus(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.valueFilterStatus = value;

    this.loadByFilters();
  }

  loadByFilters(): void {
    if(this.valueFilterSearch != '' && this.valueFilterSpecie == '0' && this.valueFilterStatus == '0'){
      this.characters = this.allCharacters.filter((character) => {
        return character.name.toLowerCase().includes(this.valueFilterSearch)
      });
    } else if (this.valueFilterSearch == '' && this.valueFilterSpecie != '0' && this.valueFilterStatus == '0'){
      this.characters = this.allCharacters.filter((character) => {
        return character.species.includes(this.valueFilterSpecie)
      });
    } else if (this.valueFilterSearch == '' && this.valueFilterSpecie == '0' && this.valueFilterStatus != '0'){
      this.characters = this.allCharacters.filter((character) => {
        return character.status.includes(this.valueFilterStatus)
      });
    } else if (this.valueFilterSearch != '' && this.valueFilterSpecie != '0' && this.valueFilterStatus != '0'){
      this.characters = this.allCharacters.filter((character) => {
        return character.species.includes(this.valueFilterSpecie) &&
              character.name.toLowerCase().includes(this.valueFilterSearch) &&
              character.status.includes(this.valueFilterStatus)
      });
    } else if (this.valueFilterSearch != '' && this.valueFilterSpecie != '0' && this.valueFilterStatus == '0'){
      this.characters = this.allCharacters.filter((character) => {
        return character.species.includes(this.valueFilterSpecie) &&
              character.name.toLowerCase().includes(this.valueFilterSearch)
      });
    } else if (this.valueFilterSearch != '' && this.valueFilterSpecie == '0' && this.valueFilterStatus != '0'){
      this.characters = this.allCharacters.filter((character) => {
        return character.status.includes(this.valueFilterStatus) &&
              character.name.toLowerCase().includes(this.valueFilterSearch)
      });
    } else if (this.valueFilterSearch == '' && this.valueFilterSpecie != '0' && this.valueFilterStatus != '0'){
      this.characters = this.allCharacters.filter((character) => {
        return character.status.includes(this.valueFilterStatus) &&
              character.species.includes(this.valueFilterSpecie)
      });
    } else if (this.valueFilterSearch == '' && this.valueFilterSpecie == '0' && this.valueFilterStatus == '0') {
      this.loadAllCharacters();
    }
  }

  loadAllCharacters(): void {
    this.characters = this.allCharacters;
  }

}
