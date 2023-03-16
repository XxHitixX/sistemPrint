import { Component, OnInit } from '@angular/core';
import { Factura } from '../../interfaces/factura.interface';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styles: [
  ]
})
export class FacturasComponent implements OnInit {

  page : number = 0;
 
  facturas !: Factura[] | undefined;

  constructor(private facturaService : FacturaService) { }

  ngOnInit(): void {
    this.facturaService.getFacturas()
        .subscribe( facturas => this.facturas = facturas)
  }

  prevPage(){
    this.page -= 10    
  }
  nextPage(){
    this.page += 10    
  }

}
