import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  productos !: Producto[] | undefined;
  page : number = 0;


  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos()
        .subscribe(productos => {
          console.log(productos);
          this.productos = productos
        })
  }

  nextPage(){
    this.page += 10;
  }

  prevPage(){
    if(this.page > 0){
      this.page -= 10
    }
  }

}
