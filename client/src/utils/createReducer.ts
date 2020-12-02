import { Reducer } from 'redux';
import { AppActionPayload, ReducerMap } from '../store/types';

export default function createReducer<State>(
  obj: ReducerMap<State>,
  initialState: State,
): Reducer {
  return (state: State = initialState, action: AppActionPayload) => {
    if (
      !action
      || !action.type
      || !obj
      || Object.prototype.hasOwnProperty.call(obj, action.type) === false
    ) {
      return state;
    }

    const selectedReducerHandler = obj[action.type];

    if (selectedReducerHandler) {
      const nextState = selectedReducerHandler(state, action);
      return { ...state, ...nextState };
    }

    return state;
  };
}
