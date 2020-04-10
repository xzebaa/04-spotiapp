import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listaBusqueda:any
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { 
    this.loading = false;
  }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.loading = true;
    this.spotifyService.getSearch( termino ).subscribe( (data: any) => {
      console.log(data);
      this.listaBusqueda = data;
      this.loading = false;
    }, error => {
      console.log('error getArtist:');
      console.log(error);
      this.loading = false;
    })
  }

}
