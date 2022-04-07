import { Injectable } from '@angular/core';
import {
  SearchBoxComponentService,
  SearchBoxConfig,
  SearchResults,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MySearchboxComponentService extends SearchBoxComponentService {
  getResults(config: SearchBoxConfig): Observable<SearchResults> {
    return super.getResults(config).pipe(
      tap((results: any) => {
        if (results?.products?.length === 1) {
          console.log('should redirect');
          this.routingService.go({
            cxRoute: 'product',
            params: { ...results.products[0] },
          });
          this.clearResults();
        }
      })
    );
  }
}
