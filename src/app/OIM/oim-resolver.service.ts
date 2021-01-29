import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Workviewuser, WorkviewuserResolved } from '../OIM/workviewuser';
import { OimService } from './oim.service';
@Injectable({
  providedIn: 'root'
})
export class OimResolver implements Resolve<WorkviewuserResolved>{

  constructor(private oimService: OimService) { }

  
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<WorkviewuserResolved> {
const id = route.paramMap.get('id');

 
return this.oimService.getUser(+id)
.pipe(
  map(wvuser => ({ wvuser })),
  catchError(error => {
    const message = `Retrieval error: ${error}`;
    console.error(message);
    return of({ wvuser: null, error: message });
  })
);
}
}
