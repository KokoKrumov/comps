import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {
      name: 'James',
      age: '24',
      job: 'Designer',
      otherProp: '23'
    },
    {
      name: 'Jil',
      age: '26',
      job: 'FE',
      otherProp: '23'
    },
    {
      name: 'Elyse',
      age: '33',
      job: 'BE',
      otherProp: '23'
    }
  ];

  headers = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'age',
      label: 'Age'
    },
    {
      key: 'job',
      label: 'Job'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
