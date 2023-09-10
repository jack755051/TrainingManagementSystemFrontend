import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { routes } from '../../app-routing.module';
console.warn(routes);

@Component({
  selector: 'layRoot',
  templateUrl: './layout-root.component.html',
  styleUrls: ['./layout-root.component.scss'],
})
export class LayoutRootComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public routeList = routes;
  showFiller = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
