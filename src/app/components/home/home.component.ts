/*import { HttpClient } from '@angular/common/http';*/

import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean; 
  error: boolean; 
  mensajeError: string = ""; 
  constructor(private spotify: SpotifyService){

    this.loading = true; 
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe((data: any) => {
     console.log(data);
      this.nuevasCanciones = data; 
      this.loading = false; 
    }, (errorServicio)=>{
      this.error = true;
      this.loading = false;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    });
  }


  /*Ejemplo peticion get sencilla:
  paises: any[] = [];

  constructor(private http: HttpClient){ 
    this.http.get('https://restcountries.com/v3.1/lang/spanish') .subscribe( (resp:any) => {
     this.paises = resp; 
     console.log(resp);
    })
  }*/

}
