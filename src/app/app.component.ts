import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

interface Item {    // Interface for the item object used for individual cell
  id: number;
  color: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public items: Item[];
  public grid: Item[] = [];
  public vertical: Item[] = [];
  public randomFlag: boolean;
  public shuffleCounter = 0;
  public sortCounter = 0;
  public shuffleDisable: boolean;    /* Boolean variables for handling the button status in UI*/
  public sortDisable: boolean;
  public gridItems = [{ color: "#72C3DC", id: 1 }, { color: "#2B8EAD", id: 2 }, { color: "#334433", id: 3 }, { color: "#6F98A8", id: 4 }, { color: "#334433", id: 5 }, { color: "#BFBFBF", id: 6 }, { color: "#BFBEBF", id: 7 }, { color: "#72C3DE", id: 8 }, { color: "#334433", id: 9 }];     // Represents the mock data for loading the page and performing the actions

  constructor() {
    this.initGrid();
    this.shuffle();
  }

  public initGrid(): void {    // Initialising the data on page load
    this.grid = this.gridItems;
    this.vertical = this.shuffleData(this.gridItems);
  }

  public shuffle(): void {   // To shuffle the data inside the grid/ vertical content
    this.sortCounter = 0;
    if (this.shuffleCounter < 1) {
      this.grid = this.shuffleData(this.grid);
      this.sortDisable = false;
    }
    else {
      this.vertical = this.shuffleData(this.grid);
    }
    this.shuffleCounter++;
    if (this.shuffleCounter > 1) {
      this.shuffleDisable = true;
      this.reset();
    }
  }

  public shuffleData(grid){
    const length = grid == null ? 0 : grid.length
    if (!length) {
      this.grid = [];
    }
    let index = -1
    const lastIndex = length - 1
    const result = [...this.gridItems];
    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
      const value = result[rand]
      result[rand] = result[index]
      result[index] = value
    }
    return result;
  }

  public sort() {     // To sort the content which is shuffled by clicking the shuffle button
    this.shuffleCounter = 0;
    if (this.sortCounter < 1) {
      this.grid = this.sortData(this.grid);
      this.shuffleDisable = false;
    }
    else {
      this.vertical = this.sortData(this.vertical);
    }
    this.sortCounter++;
    if (this.sortCounter > 1) {
      this.sortDisable = true;
      this.reset();
    }
  }

  public sortData(data: any) {   // Logic for sorting the array elements in ascending order
    data.sort(function (a: any, b: any) {
      return a.id - b.id;
    });
    return data;
  }

  public reset() {    // Reset the button status on completing one cycle of operation
    if (this.shuffleDisable && this.sortDisable) {
      this.shuffleDisable = false;
      this.sortDisable = false;
      this.shuffleCounter = 0;
      this.sortCounter = 0;
    }
  }
}
