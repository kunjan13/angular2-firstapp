import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switch: boolean = true;
  private items = [1, 2, 3, 4, 5];
  private value = 100;
  title = 'Angular2 Learning!';
  delete = false;
  OnClick(value:string) {
        alert(value);
  }

  OnSwitch(){
    this.switch = !this.switch;
  }
}
