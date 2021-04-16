import { Component, OnInit, Input } from '@angular/core';


interface Item {
  id: number;
  color: string;
}
@Component({
  selector: 'app-shuffle-component',
  templateUrl: './shuffle-component.component.html',
  styleUrls: ['./shuffle-component.component.css']
})
export class shuffleComponent implements OnInit {

  public grid: Item[] = [];
  public randomFlag:boolean;
  @Input('data')   set grids(data: any) {
    this.randomFlag = true;
    this.grid = data;
  } 

  constructor() { 
  }

  ngOnInit(): void {
  }
}
