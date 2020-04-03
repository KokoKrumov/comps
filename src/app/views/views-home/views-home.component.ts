import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {
      value: 22, label: '# of users'
    },
    {
      value: 900, label: 'Revenue'
    },
    {
      value: 50, label: 'Reviews'
    }
  ];

  items = [
    {
      imgUrl: 'https://images.unsplash.com/photo-1549775924-433bdc7ea7a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
      title: 'Alejandro Morelos',
      description: 'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1541882770369-9da3de44407e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      title: 'Alejandro Morelos',
      description: 'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
