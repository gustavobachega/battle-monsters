import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monster } from '../interfaces/monster.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class MonstersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.API_URL}/monsters`);
  }
}
