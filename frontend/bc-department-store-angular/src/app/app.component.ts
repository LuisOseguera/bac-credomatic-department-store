import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

export const globalBackendUrl: string = 'https://bc-department-store.herokuapp.com/';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'BC | Department Store';

    constructor(private modalService: NgbModal) {
    }

    public open(modal: any): void {
        this.modalService.open(modal);
    }
}
