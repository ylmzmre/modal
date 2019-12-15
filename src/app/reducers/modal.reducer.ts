import { Action } from '@ngrx/store'
import { Modal } from './../models/modal.model'
import * as ModalActions from './../actions/modal.actions'


const initialState: Modal = {
    text: 'Angular',
    date: '2019-12-15'
}

export function reducer(state: Modal[] = [initialState], action: ModalActions.Actions) {

    switch(action.type) {
        case ModalActions.ADD_MODAL:
            return [action.payload];
        default:
            return state;
    }
}