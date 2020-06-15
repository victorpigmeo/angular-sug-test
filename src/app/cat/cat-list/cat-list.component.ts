import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatService} from '../../services/cat.service';
import {Cat} from '../../entity/cat/cat.entity';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit, OnDestroy {

  public catsArray: Array<Cat>;
  public catImagesArray: Array<string> = new Array<string>();
  private catSubscription: Subscription;

  constructor(private catService: CatService) {
    this.catSubscription = this.catService.deletedCatEvent.subscribe((deletedIdArray: Array<string>) => {
      this.catsArray = this.catsArray.filter((cat: Cat) => {
        return !deletedIdArray.includes(cat._id);
      });
    });
  }

  ngOnInit(): void {
    this.catService.listCats()
      .then((catsArray: Array<Cat>) => {
        this.catsArray = catsArray;
      })
      .catch(e => console.error(e));
  }

  ngOnDestroy(): void{
    this.catSubscription.unsubscribe();
  }

  delete(id: string){
    this.catService.delete(id)
      .then((result: any) => {
        this.catService.deletedCatEvent.emit(result.result);
      })
      .catch(e => console.error(e));
  }

  generateImage(){
    this.catService.getImage()
      .then((imageArray: any) => {
        this.catImagesArray.push(imageArray[0].url);
      })
      .catch(e => console.error(e));
  }
}
