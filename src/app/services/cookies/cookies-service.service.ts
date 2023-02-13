import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookiesServiceService {
token$ = new EventEmitter<any>()
role$ = new EventEmitter<any>()
userApi$ = new EventEmitter<any>()

  constructor() { }
}
