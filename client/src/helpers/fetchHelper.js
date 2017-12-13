import Authenticity from 'react-on-rails';
import fetch from 'isomorphic-fetch';

// This helper makes a request with the provided params to the server and returns a Promise.
// The Promise can then be used in components for success/error handling when it resolves.
const fetchHelper = ({ url, method, data, processData, contentType, formData, skipCaching = false }) => {
  const token = Authenticity.authenticityToken();
  const defaultHeaders = new Headers();
  let params;
  if (!formData) {
    defaultHeaders.append('Content-Type', 'application/json');
    defaultHeaders.append('Accept', 'application/json');
  }
  defaultHeaders.append('X-CSRF-Token', token);
  defaultHeaders.append('X-Requested-With', 'XMLHttpRequest');

  params = {
    method,
    headers: defaultHeaders,
    credentials: 'same-origin',
    processData,
    contentType
  };

  if (skipCaching) params.cache = false;

  if (data) {
    const bodyParam = formData ? { body: data } : { body: JSON.stringify(data) };
    params = Object.assign(params, bodyParam);
  }

  return fetch(url, params).then(response => response.json());
};

export default fetchHelper;
