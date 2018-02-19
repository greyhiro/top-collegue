import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number): string {
    let newStr = ``;
    if (value < 0) {
      newStr = `<span class="text-danger">${value}</span>`;


    }


    if (value >= 0) {
      newStr = `<span class="text-success">+${value}</span>`;


    }

    return newStr;
  }
}
