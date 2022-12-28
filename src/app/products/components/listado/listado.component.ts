import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { IResponseApi } from 'src/app/core/interfaces/IResponseApi';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  character: Character[] = [];

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((respose: IResponseApi) => {
      this.character = respose.data;
    })
  }

  details(personaje: number) {
    this.router.navigate(['products/details', { personaje: JSON.stringify(personaje) }]);
  }

}
