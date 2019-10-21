import {REDIRECTS_FETCHED} from "./actionTypes";

const initialState = {
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case REDIRECTS_FETCHED:
            return {redirects: action.redirects};
        default:
            return state;
    }
}

export function getRedirects(state) {
    return state.redirects;
}
