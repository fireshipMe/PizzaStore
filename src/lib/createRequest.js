export const createRequest = (path, params = {}) => {
  const urlObj = new URL(path);
  Object.keys(params).forEach((key) =>
    urlObj.searchParams.append(key, params[key])
  );

  return fetch(urlObj.toString());
};
