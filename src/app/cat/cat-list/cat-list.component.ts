import { Component, OnInit } from '@angular/core';
import {CatService} from '../../services/cat.service';
import {Cat} from '../../entity/cat/cat.entity';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  public catsArray: Array<Cat>;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.listCats()
      .then((catsArray: Array<Cat>) => {
        this.catsArray = catsArray;
      })
      .catch(e => console.error(e));
  }

}
