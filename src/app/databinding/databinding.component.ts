import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
 stringInerpolation = 'This is string interpolation';
 numberInterpolation = 2;

 @Input() result: number = 3;



@Output('clickable') clicked = new EventEmitter<string>();
 OnClicked() {
   this.clicked.emit('It Works!');
 }

 person = {
   Name:'Marcus',
   Age:'29'
 };
}
