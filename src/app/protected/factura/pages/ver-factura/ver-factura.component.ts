import { Component, OnInit } from '@angular/core';
import { Factura, itemProducto} from '../../interfaces/factura.interface';
import { FacturaService } from '../../services/factura.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html',
  styles: [`
  
  .manchadito {
    background: cornflowerblue;
    }


  `
  ]
})
export class VerFacturaComponent implements OnInit {

  factura !: Factura
  items !: itemProducto[];


  constructor(private facturaService : FacturaService, 
              private activatedRouter :  ActivatedRoute,
              private fb : FormBuilder) { }


  miFormulario : FormGroup = this.fb.group({
    nombre: [''],
    cedula: [''],
    direccion: [''],
    telefono: [''],
    correo: ['']

  })

  ngOnInit(): void {
  this.activatedRouter.params
      .pipe(
        switchMap( ({id}) => this.facturaService.getFactura(id) ),
      )
      .subscribe( (factura) => {
        this.factura = factura
        this.items = factura.items;
        console.log(factura.items);
        this.miFormulario.controls['nombre'].setValue(factura.cliente?.nombre)
        this.miFormulario.controls['cedula'].setValue(factura.cliente?.cedula)
        this.miFormulario.controls['direccion'].setValue(factura.cliente?.direccion)
        this.miFormulario.controls['telefono'].setValue(factura.cliente?.telefono)
        this.miFormulario.controls['correo'].setValue(factura.cliente?.correo)

      } )    
  }




}
