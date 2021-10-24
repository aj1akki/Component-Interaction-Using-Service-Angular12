import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private _interactionService:InteractionService) { }

  ngOnInit(): void {
  }
greetStudent(){

  this._interactionService.sendMessage("Good morning student");
}
appreciateStudent(){

  this._interactionService.sendMessage("Well done student");
}
}
