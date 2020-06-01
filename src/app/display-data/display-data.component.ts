import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  
  dataArray;
  dataType="fixtures";
  objectKeys = Object.keys;
  dataHeading = "Hall Fixtures";
  forms=[];
  mockDropDowns = {};
  loading = true;

  constructor(private mockData: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getFixtureData();
  }
  changeData(dataType){
    this.dataType = dataType;
    console.log(dataType);
    if(this.dataType=="fixtures"){
      this.getFixtureData();
      this.dataHeading = "Hall Fixtures"
    } else{
      this.getEntranceSet()
      this.dataHeading = "Entrance Sets"
    }
  }

  getFixtureData(){
    this.loading = true;
    this.mockData.getFixtureData().subscribe((fixtureData)=>{
      this.dataArray = fixtureData;

      this.mockDropDowns = 
        {
          fixtureType: ["fixtureType1","fixtureType2"],
          fixtureDesign:["fixtureDesign1","fixtureDesign2"],
          finish:["finish1","finish2"],
          notes:["notes1","notes2"]
        }
        this.loading = false;
    })
  }

  getEntranceSet(){
    this.loading = true;
    this.mockData.getEntranceSetData().subscribe((entranceSetData)=>{
      this.dataArray = entranceSetData;
      this.mockDropDowns = 
        {
          leftJamb: ["Controller","HW Access"],
          rightJamb:["Controller","HW Access"],
          frameFinish:["Powder Coated","Aluminiunm"],
          doorFinish:["Powder Coated","Aluminiunm"],
          sillFinish:["Powder Coated","Aluminiunm"]
        }
      this.loading=false;
    })
  }
  originalOrder = (a, b): number => {
    return 0;
  }
  checkType(val) { return typeof val }
}
