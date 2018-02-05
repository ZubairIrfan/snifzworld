import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventGeneratorService {
  private disableScrollSubject = new Subject();
  $disableScrollObservable = this.disableScrollSubject.asObservable();

  generateScrollEvent(event) {
    this.disableScrollSubject.next(event);
  }
  constructor() { }

}
