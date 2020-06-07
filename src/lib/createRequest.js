import { trackPromise } from 'react-promise-tracker';

export const createRequest = (path, params = {}) => {
  const urlObj = new URL(path);
  Object.keys(params).forEach((key) =>
    urlObj.searchParams.append(key, params[key])
  );

  return trackPromise(fetch(urlObj.toString()));
};

export const postData = () => {
  // beautiful method just to pretend we are doing something and care about our customers.
  // I do care about them, but with just one week? nah
  return trackPromise(
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('SUCC');
      }, 2000);
    })
  );
};
