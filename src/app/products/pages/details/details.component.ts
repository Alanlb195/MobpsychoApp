import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../../services/character.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { Abilitie } from '../../interfaces/abilitie.interface';
import { Character, CharacterWithAbilities } from '../../interfaces/character.interface';

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

  CharacterWithAbilities!: CharacterWithAbilities;

  contador: number;

  ngOnInit(): void {

    // Obtenemos el character específico

    this._characterService.getCharacter(JSON.parse(this._activatedRoute.snapshot.params["personaje"]))
    .subscribe((response: CharacterWithAbilities) => {

      this.CharacterWithAbilities = response;
      console.log(this.CharacterWithAbilities);

    });

  }

  addItem() {

  }

}
