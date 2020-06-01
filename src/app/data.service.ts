import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fixturesMockDataURL = 'assets/MockData/fixtures.json';
  entranceSetmockDataURL = 'assets/MockData/entrance-set.json';

  getFixtureData():Observable<Object>{
    console.log("here")
    return this.http.get(this.fixturesMockDataURL);
  }
  getEntranceSetData():Observable<Object>{
    return this.http.get(this.entranceSetmockDataURL);
  }
}
