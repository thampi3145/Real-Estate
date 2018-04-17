import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchweather(city) {
  console.log("city"+city);
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  console.log("hhh");
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
