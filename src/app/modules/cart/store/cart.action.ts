

import { createAction, Action } from '@ngrx/store';

// export const action = createAction(
//     '[nameSpace] actionDescription',
//     props<{payloadType}>()
// );

// export const action2Success = createAction(
//     '[nameSpace] action2Description Success',
//     props<{payload2Type}>()
// );

// export const action3Failure = createAction(
//     '[nameSpace] action3Description Failure',
//     props<{payload3Type}>()
// );
export enum CartActionType {
    CARTS = 'carts',
  }


export class CartAction implements Action {
    readonly type = CartActionType.CARTS;
    constructor(public payload: any) {

    }
}