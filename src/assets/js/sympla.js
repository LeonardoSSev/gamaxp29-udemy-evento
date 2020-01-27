const API_KEY = require('../../../config/api-key.json').apiKey;

const HEADERS = {
  'Content-Type': 'application/json',
  'accept': 'application/json',
  's_token': API_KEY
};

const REQUEST_OPTIONS = {
  method: 'GET',
  headers: HEADERS
}

const BASE_URL = 'https://api.sympla.com.br/public/v3/events/{event_id}/affiliates';