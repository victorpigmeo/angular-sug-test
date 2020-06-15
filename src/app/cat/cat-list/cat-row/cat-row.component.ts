import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../../../entity/cat/cat.entity';
import {CatService} from '../../../services/cat.service';

@Component({
  selector: 'app-cat-row',
  templateUrl: './cat-row.component.html',
  styleUrls: ['./cat-row.component.scss']
})
export class CatRowComponent implements OnInit {

  @Input() cat: Cat;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
  }

  delete(id: string){
    this.catService.delete(id)
      .then((result: any) => {
        this.catService.deletedCatEvent.emit(result.result);
      })
      .catch(e => console.error(e));
  }

}
