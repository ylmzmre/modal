import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Modal } from './../models/modal.model';
import { AppState } from './../app.state';
import * as ModalActions from './../actions/modal.actions'
import { ModalService } from '../modal.service';
import * as sha512 from 'js-sha512';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  text: string;
  date: string;
  obj: {};
  shaCode: string;
  modalData: Observable<Modal>

  constructor(private modalService: ModalService, private store: Store<AppState>) {
    this.modalData = store.select('modal');
    this.modalData.subscribe(value => {
      this.obj = value;
    });
  }

  ngOnInit() {
  }
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  writeStore() {
    this.store.dispatch(new ModalActions.AddModal({ text: this.text, date: this.date }))
  }
  calculation() {
    this.shaCode = sha512.sha512(this.obj[0].text + this.obj[0].date);
  }
}
