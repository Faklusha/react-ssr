import {SEARCH_FIELDS} from "../../../components/search/consts";
import {SORT_FIELDS} from "../../../components/description/consts";

export const resolveUrl = (searchValue, searchField, sortField) => {
    let params = '100-asc';
    params = params + `-${sortField || SORT_FIELDS.release.name}`;
    if (searchValue) {
        params = params + `-${searchField || SEARCH_FIELDS.title.name}-${searchValue}`
    }
    return params;
};
