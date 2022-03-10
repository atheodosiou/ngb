import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'demo-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  cities: City[];

  selectedCity!: City;

  importSnippet = `import { NgbDropdownModule } from '@ngb/dropdown';`;
  declareSnippet = `<ngb-dropdown [options]="cities" optionLabel="name" [(ngModel)]="selectedCity" placeholder="Select a city"></ngb-dropdown>`;
  valueBindingSnippet = `<ngb-dropdown [options]="cities" optionLabel="name" optionValue="code" [(ngModel)]="selectedCity" placeholder="Select a city"></ngb-dropdown>`;
  tsSnippet = `interface City {
    name: string,
    code: string
}

export class DropdownDemo {

    cities: City[];

    selectedCity: City;

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

}`;
  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit() {
  }

}
