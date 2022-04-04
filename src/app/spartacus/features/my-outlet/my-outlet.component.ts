import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService, OutletPosition } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-outlet',
  templateUrl: './my-outlet.component.html',
  styleUrls: ['./my-outlet.component.scss']
})
export class MyOutletComponent implements OnInit {

  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
    console.log(this.product$)
  }
  product$: Observable<Product | null> = this.currentProductService.getProduct();

  OutletPosition = OutletPosition
}
