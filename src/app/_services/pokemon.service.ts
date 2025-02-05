import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.get<any>(
      'https://tyradex.app/api/v1/pokemon',
      {headers: headers}
    );
  }

}
