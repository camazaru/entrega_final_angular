import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesServiceService {
@Output() disparadorDeCookie: EventEmitter<any> = new EventEmitter();
@Output() borrarCookie: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
