// import { createReducer } from '@ngrx/store';
// import * as class from '../actions/class';

import { Action } from "@ngrx/store";

// export interface State {
         
// };

// const initialState: State = {
        
// };

// export const reducer = createReducer(
//     initialState,
//     on(
//         class.action,
//         (state) => ({...state}),
//     ),
// );

export const CARTS = 'CARTS';

export function CartReducer(state: any, action: any ) {
    switch (action.type) {
        case CARTS:
            return [...state, action.payload];
        default:
            return state;
    }
}