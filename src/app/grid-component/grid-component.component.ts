import { Component, OnInit, Input } from '@angular/core';


interface Item {
  id: number;
  color: string;
}
@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class gridComponent implements OnInit {

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
