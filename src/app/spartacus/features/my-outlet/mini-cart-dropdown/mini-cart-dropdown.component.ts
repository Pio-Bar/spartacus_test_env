import { Component, OnInit } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';

@Component({
  selector: 'app-mini-cart-dropdown',
  templateUrl: './mini-cart-dropdown.component.html',
  styleUrls: ['./mini-cart-dropdown.component.scss']
})
export class MiniCartDropdownComponent implements OnInit {

  constructor( private ActiveCartService: ActiveCartService ) { }

  activeCart$ = this.ActiveCartService.getActive()

  ngOnInit(): void {
  }

}
