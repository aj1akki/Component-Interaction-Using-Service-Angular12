import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  //1.Subject is like a source from where the messages are sent to the components

  private teacherMessageSource = new Subject<string>();

  //2.Expose the subject as observable thats why we use $symbol

  teacherMessage$ = this.teacherMessageSource.asObservable();

  constructor() { }

  //3.Create a method that accepts message from teacher component and push that message using observable

  sendMessage(message: string) {

    this.teacherMessageSource.next(message);
  }
}

