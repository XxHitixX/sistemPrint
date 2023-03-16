import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(clientes: Cliente[] | undefined, page: number = 0/* , search: string = '' */ ): Cliente[]{
    
    /*   if( search.length === 0) */
        return clientes!.slice(page, page + 10);
      
  
      /* const filteredProducts = productos.filter( product => product.nombre?.includes(search) );
      return filteredProducts.slice(page, page + 5); */
    }
  

}
