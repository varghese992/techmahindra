import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class logicService {

  constructor() { }

  shuffleData(grid) {
    const length = grid == null ? 0 : grid.length
    let index = -1
    const lastIndex = length - 1
    const result = [...grid];
    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
      const value = result[rand]
      result[rand] = result[index]
      result[index] = value
    }
    return result;
  }

  sortData(data: any) {   // Logic for sorting the array elements in ascending order
    data.sort(function (a: any, b: any) {
      return a.id - b.id;
    });
    return data;
  }

  getGridItems(){     // Represents the mock data for loading the page and performing the actions
    var gridItems = [{ color: "#72C3DC", id: 1 }, { color: "#2B8EAD", id: 2 }, { color: "#334433", id: 3 }, { color: "#6F98A8", id: 4 }, { color: "#334433", id: 5 }, { color: "#BFBFBF", id: 6 }, { color: "#BFBEBF", id: 7 }, { color: "#72C3DE", id: 8 }, { color: "#334433", id: 9 }]; 
   return gridItems;
  }
}
