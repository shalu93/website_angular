import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


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
    closeResult: string;
    constructor(private modalService: NgbModal) { }

    open(content, type, modalDimension) {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
  }

    private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
    }

    ngOnInit() {}
}
