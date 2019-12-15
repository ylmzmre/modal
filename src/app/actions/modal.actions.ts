import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Modal } from './../models/modal.model'


export const ADD_MODAL = '[MODAL] Add';

export class AddModal implements Action {
    readonly type = ADD_MODAL

    constructor(public payload: Modal) {}
}

export type Actions = AddModal