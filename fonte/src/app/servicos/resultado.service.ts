import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private _http: Http) { }

  postResposta(url: string, obj: object){

    var json = JSON.stringify(obj);

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    debugger;
    return this._http.post(url, json, options).subscribe();
  }

  getUltimaResposta(url: string) {
    return this._http.get(url).map( res => {
      var result = res.json();
      return result[result.length-1];
    });
  }
}
