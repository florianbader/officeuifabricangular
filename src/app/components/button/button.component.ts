import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  public disableButtons: boolean;
  public checkButtons: boolean;

  public click(event) {
    console.log('clicked');
    console.log(event);
  }
}
