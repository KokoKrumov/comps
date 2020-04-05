import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() items = [];
  openedItemIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }


  toggleItem(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }

}
