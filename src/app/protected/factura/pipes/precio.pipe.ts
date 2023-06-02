import { Pipe, PipeTransform } from '@angular/core';
import { ProductoService } from '../../producto/services/producto.service';
import { map } from 'rxjs';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  constructor(private productoService : ProductoService){}

  transform(id : string ) : any {
    return this.productoService.getProducto(id)
     .pipe(
      map( producto => producto.precio)
      )/* 
      .subscribe( (producto) => {
       console.log(producto);
      } ) */
    
  }
}
