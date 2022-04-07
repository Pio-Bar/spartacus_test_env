import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOutletComponent } from './my-outlet.component';
import {
  OutletPosition,
  OutletRefModule,
  provideOutlet,
} from '@spartacus/storefront';
import { MyBannerComponent } from './my-banner/my-banner.component';
import { MyLogoComponent } from './my-logo/my-logo.component';
import { TopWarningComponent } from './top-warning/top-warning.component';
import { PickUpComponent } from './pick-up/pick-up.component';
import { RouterModule } from '@angular/router';
import { MiniCartDropdownComponent } from './mini-cart-dropdown/mini-cart-dropdown.component';

@NgModule({
  declarations: [
    MyOutletComponent,
    MyBannerComponent,
    MyLogoComponent,
    TopWarningComponent,
    PickUpComponent,
    MiniCartDropdownComponent,
  ],
  imports: [CommonModule, RouterModule, OutletRefModule],
  exports: [MyOutletComponent],
  providers: [
    provideOutlet({
      id: 'Section1',
      component: MyBannerComponent,
      position: OutletPosition.REPLACE,
    }),
    provideOutlet({
      id: 'SiteLogo',
      component: MyLogoComponent,
      position: OutletPosition.REPLACE,
    }),
    provideOutlet({
      id: 'cx-storefront',
      component: TopWarningComponent,
      position: OutletPosition.BEFORE,
    }),
    provideOutlet({
      id: 'PDP.SUMMARY',
      component: PickUpComponent,
      position: OutletPosition.BEFORE,
    }),
    provideOutlet({
      id: 'MiniCart',
      component: MiniCartDropdownComponent,
      position: OutletPosition.AFTER,
    }),
  ],
})
export class MyOutletModule {}
