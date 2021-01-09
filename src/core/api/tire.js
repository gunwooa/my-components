import { api } from './_common';
import { stringify } from 'query-string';

export const getTireList = (params = {}) => {
  const queryString = stringify(params);
  const endpoint = `/api/list?mode=list&${queryString}`;
  return api.get(endpoint);
};
