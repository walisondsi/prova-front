import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor(private _http: Http) { }

  getSelects(url: string){
    return this._http.get(url).map( res => {
      return res.json();
    });
  }
}
