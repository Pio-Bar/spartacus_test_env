import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-pick-up',
  templateUrl: './pick-up.component.html',
  styleUrls: ['./pick-up.component.scss']
})
export class PickUpComponent implements OnInit {

 
  
  constructor(private CurrentProductService: CurrentProductService) {
    }
    product$ = this.CurrentProductService.getProduct()

    productData = this.product$.subscribe((x)=>x)
    
  ngOnInit(): void {
    console.log(this.productData)
  }

}
