import { async, ComponentFixture, TestBed,  tick, fakeAsync } from '@angular/core/testing';

import { DisplayDataComponent } from './display-data.component';

import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { DataService } from '../data.service';
import { Observable, Observer } from 'rxjs';

describe('DisplayDataComponent', () => {
  let component: DisplayDataComponent;
  let fixture: ComponentFixture<DisplayDataComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDataComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
  }));

  const mockFixtureData = [
    {
      "set": "A",
      "quantity":2,
      "fixtureType":"fixturetype1",
      "fixtureDesign":"fixturedesign1",
      "finish":"finish1",
      "notes":"notes1"       
    }
  ]
  const mockEntranceData = [
    {
      "quantity":1,
      "leftJamb":"Controller",
      "rightJamb":"HW Access",
      "thickness":true,
      "weldedFrame":false,
      "frameFinish":"Powder Coated",
      "doorFinish":"Powder Coated",
      "sillFinish":"Aluminiunm"
  }
  ]

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(DataService);
    fixture.detectChanges();
  });

  it('should create Display Data Component', () => {
    expect(component).toBeTruthy();
  });
  it("shold display the fixtureData on page load",fakeAsync(()=>{
    spyOn(dataService,'getFixtureData').and.returnValue(
      Observable.create((observer: Observer<any>)=>{
        observer.next(mockFixtureData);
        return observer;
      })
    )
    tick();
    fixture.detectChanges();
    console.log(component);
  }))
});
