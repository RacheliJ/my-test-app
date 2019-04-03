import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-left-div',
  templateUrl: './left-div.component.html',
  styleUrls: ['./left-div.component.scss']
})
export class LeftDivComponent implements OnInit {

  @Output() changeColor = new EventEmitter<{ color: string }>();

  color: string = "";

  constructor() { }

  ngOnInit() {
  }

  //when key is up on color input, that event is raised event of change color in middle-divs component (onColorChanged)
  onChangeColor(event) {
      this.changeColor.emit({
        color: this.color
      });
  }

}
