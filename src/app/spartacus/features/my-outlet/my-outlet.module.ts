import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOutletComponent } from './my-outlet.component';
import { OutletPosition, OutletRefModule, provideOutlet } from '@spartacus/storefront';
import { MyBannerComponent } from './my-banner/my-banner.component';

@NgModule({
  declarations: [MyOutletComponent, MyBannerComponent],
  imports: [CommonModule, OutletRefModule],
  exports: [MyOutletComponent],
  providers: [
    provideOutlet({
      id: 'Section1',
      component: MyBannerComponent,
      position: OutletPosition.REPLACE
    })
  ]
})
export class MyOutletModule {}
