import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Singlefruit } from '../singlefruit/singlefruit';
import { Fruitlistdata } from '../../fruitlistdata';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, Singlefruit],
  templateUrl: './fruitlist.html',
  styleUrls: ['./fruitlist.scss'],
})
export class Fruitlist {
  // fontColorGood = 'green';
  // fontColorBad = 'red';

  fruitlistdata = inject(Fruitlistdata);

  addComment(comment: string, index: number) {
    this.fruitlistdata.addCommentToFruit(comment, index);
  }
}
