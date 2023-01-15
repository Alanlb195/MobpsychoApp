import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IResponseApi } from 'src/app/core/interfaces/IResponseApi';
import { Character, CharacterWithAbilities } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  url = environment.baseUrl + '/characters/';

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url);
  }

  public getCharacter(idCharacter: number): Observable<CharacterWithAbilities> {
    return this.http.get<CharacterWithAbilities>(this.url + idCharacter);
  }

}
