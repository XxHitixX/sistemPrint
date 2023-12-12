import { Component, OnInit } from '@angular/core';
import { AcabarseService } from '../../services/acabarse.service';
import { Producto } from 'src/app/protected/producto/interfaces/producto.interface';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-acabarse',
  templateUrl: './acabarse.component.html',
  styles: [
  ]
})
export class AcabarseComponent implements OnInit {

  productos !: Producto[];
  docDefinition = {
    content : []
  }

  constructor(private acabarseService : AcabarseService) { }

  ngOnInit(): void {
    this.acabarseService.getAcabarse()
        .pipe(
        )
        .subscribe( producto => this.productos = producto.productos);
  }

  createPdf(){

    this.productos.forEach( objeto => {
      this.docDefinition.content.push({
        text: '#' + objeto.nombre + ' Costo: ' + objeto.costo + ' Existencias: ' + objeto.stock  
      })
    } )

    const documento = {
      content: [
        {
          text: 'Lista de productos a comprar',
          style: 'header'
        },
       ' ' + this.docDefinition
      ]
    }

    const pdf = pdfMake.createPdf(this.docDefinition);
    pdf.open();
  }

}
