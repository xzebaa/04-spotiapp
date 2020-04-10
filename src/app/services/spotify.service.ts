import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService { 




  constructor(private http: HttpClient ) { }

  getQuery(query: string) {

    const TOKEN_SPOTIFY = 'BQBtkTKSb06f5Hy3BT-eTCJrZ0qj7a4ixuLlZA8RUlCmwdW4DUvGN5NzsUHdvus6B6RXyL2SJTs380zyt8c';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${TOKEN_SPOTIFY}`
    });

    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers });

  }

  getNewRelease() {
    return this.getQuery('browse/new-releases?limit=20').
    pipe( map( data => {
      return data['albums'].items;
    }));
  }

  getSearch(termino: string) {
    return this.getQuery(`search?q=${termino}&limit=10&type=artist`).
    pipe( map( data => {
      return data['artists'].items;
    }));;
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`).
    pipe( map( data => {
      return data
    }));;
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`).
    pipe( map(  (data: any) => {
      return data.tracks
    }))
  }
}
