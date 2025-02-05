import {Component, OnInit} from '@angular/core';
import {PokemonService} from './_services/pokemon.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NgForOf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

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
