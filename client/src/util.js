import axios from 'axios';

//=====================
//=== Posts ===========
//=====================

export function getPosts() {
  console.log('axios get req made');
  return axios.get('backend/posts');
}
