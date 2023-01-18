import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Pipe({
  name: 'filtro'
})
export class PaginadoPipe implements PipeTransform {

  transform(productos: Producto[] | undefined, page: number = 0/* , search: string = '' */ ): Producto[]{
    
  /*   if( search.length === 0) */
      return productos!.slice(page, page + 10);
    

    /* const filteredProducts = productos.filter( product => product.nombre?.includes(search) );
    return filteredProducts.slice(page, page + 5); */
  }

}
