import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent   {
  @Input() image:string = '';
  @Input() name:string = '';
  @Input() status:string = '';
  @Input() species:string = '';
  @Input() gender:string = '';
  @Input() created:string = '';
}
