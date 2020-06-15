import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cat} from '../entity/cat/cat.entity';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  public cat: Cat;
  private catsBaseUrl = environment.serverBaseUrl + '/cats';

  constructor(private httpClient: HttpClient) { }

  public listCats(): Promise<Array<Cat>>{
    return this.httpClient.get<Array<Cat>>(this.catsBaseUrl).toPromise();
  }

  public addCat(cat: Cat): Promise<Cat>{
    return this.httpClient.post<Cat>(this.catsBaseUrl, cat).toPromise();
  }

  public editCat(cat: Cat): Promise<Cat>{
    return this.httpClient.put<Cat>(`${this.catsBaseUrl}/${cat._id}`, cat).toPromise();
  }

  public findCatById(id: string): Promise<Cat>{
    return this.httpClient.get<Cat>(`${this.catsBaseUrl}/${id}`).toPromise();
  }
}
