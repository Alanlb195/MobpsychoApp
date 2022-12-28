import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IResponseApi } from 'src/app/core/interfaces/IResponseApi';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  url = environment.baseUrl + '/characters/';

  public getCharacters(): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(this.url);
  }

  public getCharacter(idCharacter: number): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(this.url + idCharacter);
  }

}
