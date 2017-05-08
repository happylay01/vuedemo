import { fetch } from 'utils/fetch';

export function fetchList(query) {
    return fetch({
        url: '/brand/getBrandList/',
        method: 'get',
        params: query
    });
}

