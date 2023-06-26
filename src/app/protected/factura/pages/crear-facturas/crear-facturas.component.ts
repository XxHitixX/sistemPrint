import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Cliente } from 'src/app/protected/cliente/interfaces/cliente.interface';
import { ClienteService } from '../../../cliente/services/cliente.service';
import { ProductoService } from '../../../producto/services/producto.service';
import { map, tap } from 'rxjs/operators';
import { Producto } from 'src/app/protected/producto/interfaces/producto.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { itemProducto, Factura, FacturaGuardar } from '../../interfaces/factura.interface';
import { FacturaService } from '../../services/factura.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProductoActualizado } from '../../../producto/interfaces/producto.interface';

@Component({
  selector: 'app-crear-facturas',
  templateUrl: './crear-facturas.component.html',
  styles: [`
  
  .contenedor-venta {
    margin: 10px auto;
    padding: 5px;
    border: 1px;
    border-color: #0d6efd;
    border-style: solid;
    border-radius: 5px;
    box-sizing: content-box;
  }

  .resultado{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }

  `
  ]
})
export class CrearFacturasComponent implements OnInit {

  clientes !: Cliente[];
  cliente : Cliente = {
    nombre: '',
    cedula: '',
    telefono: '',
    correo: '',
    direccion: ''

  };
  productos !: Producto[] | undefined;
  productoItem: itemProducto[] = [];
  productosItem: Producto[] = [];
  factura !: FacturaGuardar;
  existencias : Number  = 0;
  productoXActualizar !: Producto;
  productoActualizado !: ProductoActualizado;
  

 

  @ViewChild('canti') cantida !: ElementRef<HTMLInputElement>;
  @ViewChild('ProductoFocu') productoFocus !: ElementRef<HTMLInputElement>;

  total : number = 0;
  cantidad : number = 0;


  constructor(private clienteService: ClienteService,
    private productoService: ProductoService,
    private facturaService : FacturaService,
    private router : Router,
    private fb: FormBuilder) { }



  miFormulario: FormGroup = this.fb.group({
    cliente: [, [Validators.required]],
/*     nombre:  [''],
    telefono:  [''],
    cedula:  [''],
    correo:  [''], */
    tipoPago: ['efectivo'],
    cantidad: [, [Validators.min(0)]],
    total: ['', [Validators.required]],
    producto: ['', [Validators.required] ]
  })

  
  ngOnInit(): void {

    this.productoService.getProductos()
        .subscribe(producto => this.productos = producto);
  }

  agregarProducto() {

    this.productoService.getProducto(this.miFormulario.controls['producto'].value)
      .subscribe(producto => {
        //const cantidad = this.miFormulario.controls['cantidad'].value;
        console.log(producto);
        this.existencias = producto.stock;
        this.productoXActualizar = producto;

        if( producto.stock < Number(this.cantida.nativeElement.value)){
          
          Swal.fire('Error','El valor solicitado es superior a las existencias', 'error')
          
          return;

        } else {

          const cantidad = Number(this.cantida.nativeElement.value);
          this.productosItem?.push(producto)
          const precio = Number(producto.precio);
          const total = precio * cantidad;
          this.total += total; 
          
          this.productoItem.push({
            _id: this.miFormulario.controls['producto'].value,
            cantidad: this.miFormulario.controls['cantidad'].value,
            producto
          })

         // this.actualizarProducto();
      
          this.productoFocus.nativeElement.focus();

        }
        
        
      });



   
    
  }

  noEsValido( campo : string ){
    return this.miFormulario.controls[campo].errors 
           && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    this.factura = {
      cliente: this.cliente.id,
      total: this.total,
      items: this.productoItem,
      tipoPago: 'efectivo'
    }
    this.facturaService.crearFactura(this.factura)
          .subscribe( respuesta => {
            Swal.fire('Actualización exitosa.', '', 'success');
            this.router.navigateByUrl('protected/facturas');
          });
          
    this.actualizarProducto();
    
          

  }

  buscarCliente(){
    this.clienteService.buscarClienteCedula(this.miFormulario.controls["cliente"].value)
    .pipe(
      map( resultado => resultado.results[0].slice(0,3) )
    )
    .subscribe(clientes => {
      this.clientes = clientes;
    })
  }

clienteSeleccionado(cliente : Cliente){
  this.cliente = cliente;
  this.productoFocus.nativeElement.focus();

}

actualizarProducto(){

    //TODO: Toca repensar nuevamente este cuento, el tipado me esta molestando bastante

     this.productoActualizado = {
      nombre: this.productoXActualizar.nombre,
      stock: this.productoXActualizar.stock - Number(this.cantida.nativeElement.value),
      categoria: this.productoXActualizar.categoria?._id,
    }
    
    this.productoService.actualizarProducto(this.miFormulario.controls['producto'].value, this.productoActualizado)
        .subscribe()

}

cancelarVenta(){
    
}

}
