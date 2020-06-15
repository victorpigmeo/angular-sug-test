import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cat-image',
  templateUrl: './cat-image.component.html',
  styleUrls: ['./cat-image.component.scss']
})
export class CatImageComponent implements OnInit {

  @Input() imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
