import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/Collegue'

@Pipe({
  name: 'trierParScoreDec'
})
export class TrierParScoreDecPipe implements PipeTransform {
  transform(listCollegues: Collegue[]): Collegue[] {
    return listCollegues.sort(function(a, b) {
      return a.score - b.score;
    });

  }
}
