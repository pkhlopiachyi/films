// tslint:disable:no-any
export const buildQueryString = (action: any) => (Object.entries(action)
    .filter(param => param[1] !== '')
    .map((param: any) => (`${param[0]}=${encodeURIComponent(param[1])}`))
    .join('&')
);
