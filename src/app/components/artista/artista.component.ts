import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { SpotifyService } from '../../services/spotify.service'
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  
  artista: any = {}
  loading= true;
  topTracks: any = {};

  constructor( private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params
    .subscribe( params => {
      this.getArtist(params['id']);
    }, error => {
      console.log('error:');
      console.log(error);
      this.loading = false;
    })
   }

  ngOnInit(): void {
  }

  getArtist( id: string) {

    this.spotifyService.
    getArtist(id).
    subscribe( data => {
      console.log(data)
      this.artista = data;
      this.getTracks(id);
      
    }, error => {
      console.log('error getArtist:');
      console.log(error);
      this.loading = false;
    })
  }

  getTracks(id: string) {
    this.spotifyService.getTopTracks(id).
    subscribe( data => {
      this.topTracks = data
      console.log(data)
      this.loading = false;
    }, error => {
      console.log('error:');
      console.log(error);
      this.loading = false;
    })
  }

}
