import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("servicio funcionando");
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDRdDd8lvfhwplBWt-1z78QWwJ8Qi6l6keA9ikcDvq3sL8pgcbQJo-sZWgK62Eeke_C4YDvOlboLX-8rRCvbd-0YakM-fIV8T4ZDNzzvUnKo9KUk5g'

    });

    return this.http.get(url, {headers}); 


  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map((data: any) => data['albums'].items));

   /*  return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe(map((data: any) => data['albums'].items)); */



  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map((data: any) =>data['artists'].items));
    
    /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAx9nfcKoYim-1ji5cq9JjkYZHYaJurHzuvtgoX5RFvwbc-X2-KdPDgQNxhanxn8XazHAu9brotH2wqtPwSSc4y_1eFDocqXLxmWdP_cqO9nbhK0L8'

    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe(map((data: any) =>data['artists'].items)); */
  }
  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
   // .pipe(map((data: any) =>data['artists'].items));
    
  }
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
     .pipe(map((data: any) =>data['tracks']));
    
  }
}


