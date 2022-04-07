import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-warning',
  templateUrl: './top-warning.component.html',
  styleUrls: ['./top-warning.component.scss'],
})
export class TopWarningComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  expanded = true;

  close() {
    this.expanded = false;
  }
}
