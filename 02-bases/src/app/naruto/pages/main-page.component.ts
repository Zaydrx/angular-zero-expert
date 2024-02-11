import { Component } from '@angular/core';
import { NarutoService } from '../services/naruto.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-naruto-main-page',
  templateUrl: './main-page.component.html',
})


export class MainPageComponent {

 constructor( private narutoService: NarutoService ) {}

  get characters (): Character[] {
    return [...this.narutoService.characters];
  }

  onDeleteCharacter (id: string): void {
    this.narutoService.deleteCharacterById( id );
  }

  onNewCharacter ( character: Character ): void {
    this.narutoService.addCharacter( character );

  }
}
