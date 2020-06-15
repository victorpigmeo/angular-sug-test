import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../../../entity/cat/cat.entity';

@Component({
  selector: 'app-cat-row',
  templateUrl: './cat-row.component.html',
  styleUrls: ['./cat-row.component.scss']
})
export class CatRowComponent implements OnInit {

  @Input() cat: Cat;

  constructor() { }

  ngOnInit(): void {
  }

}
