import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcabarseComponent } from './pages/acabarse/acabarse.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'acabarse',
        component: AcabarseComponent
      },
      {
        path: 'buscador',
        redirectTo: 'acabarse'
      },
      {
        path: '**',
        redirectTo: 'acabarse'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscadorRoutingModule { }
