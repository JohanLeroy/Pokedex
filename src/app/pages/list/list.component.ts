import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PokemonService} from '../../_services/pokemon.service';

@Component({
  selector: 'app-list',
    imports: [
        NgForOf
    ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  pokemons: any = [];

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe({
      next: (response: any) => {
        this.pokemons = response;
      }
    })
  }

}
