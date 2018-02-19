import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/Collegue'
@Pipe({
  name: 'trierParScore'
})
export class TrierParScorePipe implements PipeTransform {

  transform(listCollegues: Collegue[]): Collegue[] {
    return listCollegues.sort(function(a, b) {
      return b.score - a.score;
    });

  }
}
