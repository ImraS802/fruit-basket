import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  imports: [FormsModule],
  templateUrl: './singlefruit.html',
  styleUrl: './singlefruit.scss',
})
export class Singlefruit {
  @Input() fruit = {
    name: 'Apfel',
    img: '/fruits/apple.png',
    description:
      'Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.',
    genus: 'Kernobstgewächsen innerhalb der Familie der Rosengewächse',
    stars: 2.3,
    reviews: [
      { name: 'Kevin W.', text: 'ist lecker' },
      { name: 'Arne P.', text: 'nicht so meins' },
    ],
  };

  inputData = '';

  @Output() fruitname = new EventEmitter<string>();

  sendInputData() {
    this.fruitname.emit(this.inputData);
    // console.log(this.inputData);
  }
}
