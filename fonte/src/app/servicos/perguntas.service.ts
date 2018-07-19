import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  constructor(private _http: Http) { }

  getPerguntas(url: string){
    return this._http.get(url).map( res => {
      return res.json();
    });
  }
}