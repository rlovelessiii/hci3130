import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  like = [false, false, false, false];
  dislike = [false, false, false, false];
  constructor() { }

  ngOnInit() {
  }
  toggleLike(index) {
    this.like[index] = !this.like[index];
  }
  toggleDislike(index) {
    this.dislike[index] = !this.dislike[index];
  }

}
