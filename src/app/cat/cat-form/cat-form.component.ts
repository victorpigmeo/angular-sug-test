import { Component, OnInit } from '@angular/core';
import {Cat} from '../../entity/cat/cat.entity';
import {CatService} from '../../services/cat.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss']
})
export class CatFormComponent implements OnInit {

  cat: Cat = new Cat();
  message: string;

  constructor(private catService: CatService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id != null){
      this.findCatById(this.activatedRoute.snapshot.params.id);
    }
  }

  private findCatById(id: string): void{
    this.catService.findCatById(id)
      .then((cat: Cat) => {
        this.cat = cat;
      })
      .catch(e => console.error(e));
  }

  save(): void{
    if (this.cat._id != null){
      this.update();
    }else{
      this.insert();
    }
  }

  private update(): void {
    this.catService.editCat(this.cat)
      .then((cat: Cat) => {
        this.message = 'Cat updated!';
        setTimeout(() => {
          this.message = null;
        }, 3000);
      })
      .catch(e => console.error(e));
  }

  private insert(): void{
    this.catService.addCat(this.cat)
      .then((cat: Cat) => {
        this.router.navigate(['']);
      })
      .catch(e => console.error(e));
  }

}
