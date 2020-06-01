import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({

    imports:[
      HttpClientTestingModule
    ],
    providers:[DataService]
  }));
  
  const mockFixtureData = 
    [
      {
          "set": "A",
          "quantity":2,
          "fixtureType":"fixturetype1",
          "fixtureDesign":"fixturedesign1",
          "finish":"finish1",
          "notes":"notes1"       
      },
      {
          "set": "B",
          "quantity":2,
          "fixtureType":"fixturetype2",
          "fixtureDesign":"fixturedesign2",
          "finish":"finish2",
          "notes":"notes2"       
      },
      {
          "set": "C",
          "quantity":2,
          "fixtureType":"fixturetype3",
          "fixtureDesign":"fixturedesign3",
          "finish":"finish3",
          "notes":"notes3"     
      }
  ]
  
  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  // it('should get the fixture data when the getFixtureData method is called',(done: DoneFn)=>{
  //   const service: DataService = TestBed.get(DataService);
  //   service.getFixtureData().subscribe(fixtureDataFromService=>{
  //     expect(fixtureDataFromService).toBe(mockFixtureData);
  //     done();
  //   })
  // })

});
