async function listEvents() {
  try {
    const response = await fetch(getBaseUrl(), getRequestOptions());
  
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

function getBaseUrl() {
  return 'https://api.sympla.com.br/public/v3/events';
}

function getRequestOptions() {
  return {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: getHeaders()
  };
}

function getHeaders() {
  return  {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    's_token': getApiKey()
  };
}