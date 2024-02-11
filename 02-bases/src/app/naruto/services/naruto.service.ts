import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class NarutoService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Naruto',
    power: 1000,
  }, {
    id: uuid(),
    name: 'Sauke',
    power: 999,
  }, {
    id: uuid(),
    name: 'Rock Lee',
    power: 800,
  }];

  addCharacter( character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter( index: number ) {
    this.characters.splice( index, 1 );
  }*/ //Se deja como referencia

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter(  character => character.id !== id );
    }
}
