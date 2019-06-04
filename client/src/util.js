import axios from 'axios';

//=====================
//=== Posts ===========
//=====================

export function getPosts() {
  return axios.get('/posts');
}
