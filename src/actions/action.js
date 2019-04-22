import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from '../constants/constant';
export const setSearchField = (text) =>({
    type:CHANGE_SEARCH_FIELD,
    payload: text
})  