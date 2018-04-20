import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const CREATE_POST = 'CREATE_POST';

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

export function createPost(props) {
    //console.log(props); return false;
   const url = 'http://polls.apiblueprint.org/questions'; 
   let data = '{"question": "Favourite programming language?","choices": ["Swift","Python","Objective-C","Ruby"] }';
   const request = axios.post(url,data);
   //console.log("sazda",request.status);
   return {
       type: CREATE_POST,
       payload: request
   };
}
