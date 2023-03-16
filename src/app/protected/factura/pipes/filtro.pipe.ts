import { Pipe, PipeTransform } from '@angular/core';
import { Factura } from '../interfaces/factura.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(facturas : Factura[], page : number = 0): Factura[] {
    return facturas!.slice(page, page + 10);
  }

}
