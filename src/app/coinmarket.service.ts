import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinmarketService {

  constructor(public http:HttpClient) { }

obtenerDatos(){
  return this.http.get<any>('https://rickandmortyapi.com/api/character')
}

obtenerDatosChar(id:any){
  return this.http.get('https://rickandmortyapi.com/api/character/'+id)
}
}