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
}
