import { NgModule } from '@angular/core';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { MySearchboxComponentService } from './my-searchbox-component.service';

@NgModule({
  providers: [
    {
      provide: SearchBoxComponentService,
      useExisting: MySearchboxComponentService,
    },
  ],
})
export class MySearchModule {}
