import UserProfile from '../shared/UserProfile';

export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete
};

const baseUrl = `${process.env.API_HOST}:${process.env.API_PORT}`;

async function get(url) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(url)
  };

  const response = await fetch(url, requestOptions);

  return await handleResponse(response);
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    credentials: 'include',
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader(url) },
    body: JSON.stringify(body)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(url)
  };
  return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = JSON.parse(UserProfile.getUserProfile());
  console.log('user', user);
  const isLoggedIn = user && user.jwtToken;
  const isApiUrl = url.startsWith(baseUrl);
  if (isLoggedIn && isApiUrl) {
    console.log('Bearer', user.jwtToken);
    return { Authorization: `Bearer ${user.jwtToken}` };
  }
  return {};
}

async function handleResponse(response) {
  const text = await response.text();
  const data = text && JSON.parse(text);

  if (!response.ok) {
    if ([401, 403].includes(response.status) && UserProfile.getUserProfile) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      // accountService.logout();
    }

    throw (data && data.message) || response.statusText;
  }

  return data;
}
