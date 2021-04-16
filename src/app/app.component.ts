import { Component } from '@angular/core';
import { logicService } from './logic.service';

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

  constructor(private logicService: logicService) {
  }
  ngOnInit(): void {
    this.initGrid();
  }

  public initGrid(): void {    // Initialising the data on page load
    this.grid = this.logicService.shuffleData(this.logicService.getGridItems());
    this.vertical = this.logicService.shuffleData(this.logicService.getGridItems());
  }

  public shuffle(): void {   // To shuffle the data inside the grid/ vertical content
    this.sortCounter = 0;
    if (this.shuffleCounter < 1) {
      this.grid = this.logicService.shuffleData(this.grid);
      this.sortDisable = false;
    }
    else {
      this.vertical = this.logicService.shuffleData(this.grid);
    }
    this.shuffleCounter++;
    if (this.shuffleCounter > 1) {
      this.shuffleDisable = true;
      this.reset();
    }
  }

  public sort() {     // To sort the content which is shuffled by clicking the shuffle button
    this.shuffleCounter = 0;
    if (this.sortCounter < 1) {
      this.grid = this.logicService.sortData(this.grid);
      this.shuffleDisable = false;
    }
    else {
      this.vertical = this.logicService.sortData(this.vertical);
    }
    this.sortCounter++;
    if (this.sortCounter > 1) {
      this.sortDisable = true;
      this.reset();
    }
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
