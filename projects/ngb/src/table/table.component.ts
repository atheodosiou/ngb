import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class NgbTableComponent implements OnInit {

  constructor() { }

  sum!: number;

  ngOnInit() {
    // this.sum = sum(5, 6);
  }

}
