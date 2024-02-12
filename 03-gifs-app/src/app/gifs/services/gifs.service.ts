import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})

export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];

  private apiKey:      string = 'VqsnbzPkpTmjrJ5CZcIyibpnTW4GXUfU';
  private serviceURL:  string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs service Ready');
  }

  get tagsHistory()  {
    return [...this._tagsHistory];
  }

   private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice (0, 18);
    this.saveLocalStorage();
  }

  //Here we create something to save in local storage
  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify( this._tagsHistory ))
  }
//created to read the local storage and show it
  private loadLocalStorage():void {
    //if there's no data
    if( !localStorage.getItem('history') ) return;
    //if there's data
      this._tagsHistory = JSON.parse( localStorage.getItem('history')!/*! = not null*/ );

    if(this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0] );
  }
}

  async searchTag( tag: string ):Promise<void> {
    if ( tag.length === 0 ) return;

    this.organizeHistory(tag);

    //this const was elaborated to divide the link of the API, in order to look a bit more clean
    const params = new HttpParams()
    .set( 'api_key', this.apiKey)
    .set( 'limit', '10')
    .set( 'q', tag)

    this.http.get<SearchResponse>(`${ this.serviceURL }/search`, { params })
    .subscribe((resp) => {

      this.gifList = resp.data;
    });
  }
}
