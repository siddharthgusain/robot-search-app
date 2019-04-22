import { CHANGE_SEARCH_FIELD } from '../constants/constant';

export const setSearchField = (text) =>({
    type:CHANGE_SEARCH_FIELD,
    payload: text
})  