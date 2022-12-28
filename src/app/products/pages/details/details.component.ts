import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../../services/character.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { IResponseApi } from '../../../core/interfaces/IResponseApi';
import { Abilitie } from '../../interfaces/abilitie.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    protected _characterService: CharacterService,
  ) {
    this.contador = 0;
  }

  character: any;
  abilities: Abilitie[] = [];

  contador: number;

  ngOnInit(): void {

    // Obtenemos el character específico

    this._characterService.getCharacter(JSON.parse(this._activatedRoute.snapshot.params["personaje"])).subscribe((response: IResponseApi) => {
      this.character = response.data;
      this.abilities = response.data.abilitie;
    });

  }

  addToCart() {

  }


  agregar() {
    this.contador = this.contador + 1;
  }

  restar() {
    this.contador = this.contador - 1;
  }

}
