import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-div',
  templateUrl: './right-div.component.html',
  styleUrls: ['./right-div.component.scss']
})
export class RightDivComponent implements OnInit {

  @Input()
  color: string;

  constructor() { }

  ngOnInit() {
  }

}
