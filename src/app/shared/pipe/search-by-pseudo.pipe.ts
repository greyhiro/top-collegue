import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/Collegue';

@Pipe({
  name: 'searchByPseudo'
})
export class SearchByPseudoPipe implements PipeTransform {

  transform(listCollegues: Collegue[], search: string): Collegue[] {
    console.log(listCollegues, search)
    return listCollegues.filter((element) => element.nom.indexOf(search) >= 0)
  }
}
