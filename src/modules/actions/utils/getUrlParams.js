const options = ['limit', 'sortOrder', 'sortBy', 'searchBy', 'search'];

export const getUrlParams = (url, params) => {
  let splittedParams = params.split('-');
  splittedParams = splittedParams.map((param, index) => param && `${options[index]}=${param}`);
  return `${url}?${splittedParams.join('&')}`;
};




