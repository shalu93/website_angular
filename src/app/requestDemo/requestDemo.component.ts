import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './requestDemo.component.html',
    styleUrls: ['./requestDemo.component.scss']
})
export class RequestDemoComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    constructor() { }

    ngOnInit() {}
}
