import redirectService from "../../services/RedirectService";
import {REDIRECTS_FETCHED} from "./actionTypes";

export function fetchRedirects() {
    return async (dispatch, state) => {
        try {
            let redirects = (await redirectService.fetchRedirects());
            console.log(redirects)
            const redirectsByPath = redirects.reduce((obj, item) => {
                obj[item.path] = item;
                return obj
            }, {});
            dispatch({type: REDIRECTS_FETCHED, redirects: redirectsByPath});
        } catch (error) {
            console.log(error);
        }
    }
}
