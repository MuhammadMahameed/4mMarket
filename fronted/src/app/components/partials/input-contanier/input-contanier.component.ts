import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-contanier.component.css']
})
export class InputContainerComponent implements OnInit {

  @Input()
  label!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
