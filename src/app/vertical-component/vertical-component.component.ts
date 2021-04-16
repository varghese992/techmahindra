import { Component, OnInit, Input } from '@angular/core';

interface Item {
  id: number;
  color: string;
}
@Component({
  selector: 'app-vertical-component',
  templateUrl: './vertical-component.component.html',
  styleUrls: ['./vertical-component.component.css']
})
export class verticalComponent implements OnInit {
  @Input('data')   set grids(data: any) {
    this.grid = data;
  } 
  public grid: Item[] = [];
  constructor() { 
  }
  ngOnInit(): void {
  }
}
