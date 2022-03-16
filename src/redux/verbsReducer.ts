import {constants, VerbsState} from "../constants/constants";
import { CardActionTypes, VerbsAction  } from "./constants";


const InitialState:VerbsState = {
    cards : constants,
    score: 0,
}
const verbsReducer = (state= InitialState, action:VerbsAction) => {
    switch (action.type ) {
        case CardActionTypes.GET_VERBS: return state.cards;
        case CardActionTypes.CHECK_ANSWER: return {
            ...state,
            cards: state.cards.filter((el) => el.active === action.payload)
        };
        case CardActionTypes.TRY_AGAIN: return {
            ...state,
            cards: action.payload
        };
        case CardActionTypes.CHANGE_SCORE: return {
            ...state,
            score: action.payload
        };
        default : return state;

    }
}
export default verbsReducer;
