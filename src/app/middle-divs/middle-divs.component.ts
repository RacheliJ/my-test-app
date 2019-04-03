import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-divs',
  templateUrl: './middle-divs.component.html',
  styleUrls: ['./middle-divs.component.scss']
})
export class MiddleDivsComponent implements OnInit {

  constructor() { }

  color: string = "red";

  ngOnInit() {
  }

  //when changeColor event is raised from left-div component, this.color is updated and updates the value of right-div component color
  onColorChanged(data:{color:string}){
    this.color = data.color;
  }
}
