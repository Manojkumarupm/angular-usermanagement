import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OimEditComponent } from './oim-edit.component';

@Injectable({
  providedIn: 'root'
})
export class OimEditGuard implements CanDeactivate<OimEditComponent> {
  canDeactivate(component: OimEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.oimForm.dirty) {
      const productName = component.oimForm.get('loginId').value || 'New User';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }
    return true;
  }
  
}
