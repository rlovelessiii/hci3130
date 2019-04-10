import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  play = [true, true, true, true, true, true, true, true, true, true];
  like = [false, false, false, false, false, false, false, false, false, false];
  togglePlay(index): void {
    this.play[index] = !this.play[index];
  }
  toggleLike(index): void {
    this.like[index] = !this.like[index];
  }
}
