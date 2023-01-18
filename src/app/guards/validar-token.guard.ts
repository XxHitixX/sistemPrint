import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
   /*  let decision !: boolean;
     this.authService.verificarToken()
       .subscribe(resp => {
         decision = resp
         console.log('canActivate', decision);
       })
 
     return (decision === true) ? false : true */
  

      const respuesta = this.authService.verificarToken()
      .pipe(
        map(resp =>  {
          return resp.ok
        }),
        catchError(err => {
          this.router.navigateByUrl('/auth/login')
          return of(false)
        })
      )
      return respuesta;




       //Intento fallido
     /* if (!this.authService.verificarToken()) {
      console.log('No estas logueado');
      this.router.navigate(['/auth/']);
      return false;
    } else {
      return true
    } */
    //return (!this.authService.verificarToken) ? of(false) : of(true)
  }
  canLoad(): Observable<boolean> | boolean {
   /* 
    let decision !: boolean;
    this.authService.verificarToken()
      .subscribe(resp => {
        decision = resp
        console.log('canActivate', decision);
      })

    return (decision === true) ? false : true
    */

    const respuesta = this.authService.verificarToken()
    .pipe(
      map(resp =>  {
        return resp.ok
      }),
      catchError(err => {
        this.router.navigateByUrl('/auth/login')
        return of(false)
      })
    )
    return respuesta;

   
   /* 
    if (!this.authService.verificarToken()) {
      console.log('No estas logueado');
      this.router.navigate(['/auth/'])
      return false;
    } else {
      return true
    }  */
   // return (!this.authService.verificarToken) ? of(false) : of(true)
  }
}
