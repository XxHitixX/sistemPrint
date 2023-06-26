import { Component, OnInit } from '@angular/core';
import { AcabarseService } from '../../services/acabarse.service';
import { Producto } from 'src/app/protected/producto/interfaces/producto.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-acabarse',
  templateUrl: './acabarse.component.html',
  styles: [
  ]
})
export class AcabarseComponent implements OnInit {

  productos !: Producto[];

  constructor(private acabarseService : AcabarseService) { }

  ngOnInit(): void {
    this.acabarseService.getAcabarse()
        .pipe(
        )
        .subscribe( producto => this.productos = producto.productos);
  }

}
