import { Component, OnInit, Input } from '@angular/core';

interface Item {
  id: number;
  color: string;
}
@Component({
  selector: 'app-sort-component',
  templateUrl: './sort-component.component.html',
  styleUrls: ['./sort-component.component.css']
})
export class sortComponent implements OnInit {
  @Input('data')   set grids(data: any) {
    this.grid = data;
  } 
  public grid: Item[] = [];
  constructor() { 
  }
  ngOnInit(): void {
  }
}
