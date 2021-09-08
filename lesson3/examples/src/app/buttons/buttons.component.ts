import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   
   buttonGold: string = "Gold"
   inactive1: boolean = false;

   buttonSilver: string = "Silver"
   inactive2: boolean = false;

   buttonCopper: string = "Copper"
   inactive3: boolean = false;
   
   constructor() { }

   ngOnInit() { }

}
