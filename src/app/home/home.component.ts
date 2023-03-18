import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    showMeOvalDiv:boolean = true
    showMeRectDiv:boolean = false

    hoverMe(){
        this.showMeOvalDiv = false;
        this.showMeRectDiv = true;
    }
    constructor() { }

    ngOnInit() {}
}
