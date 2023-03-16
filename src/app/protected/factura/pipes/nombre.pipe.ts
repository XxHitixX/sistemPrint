import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../../producto/interfaces/producto.interface';
import { ProductoService } from '../../producto/services/producto.service';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  constructor(private productoService : ProductoService){}

  transform(id : string ) : any {
    return this.productoService.getProducto(id)
     .pipe(
      map( producto => producto.nombre)
      )/* 
      .subscribe( (producto) => {
       console.log(producto);
      } ) */
    
  }

}
