import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  paises: any = [];
  nuevasCanciones: any[] = [];
  loading: boolean;
  constructor(private http: HttpClient, private _spotifyService:SpotifyService) { 
    this.loading = true;
    this._spotifyService.getNewRelease()
        .subscribe( (data: any) => {
          console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
        }, error => {
          console.log('error getArtist:');
          console.log(error);
          this.loading = false;
        });
  }

  ngOnInit(): void {
  }

}
