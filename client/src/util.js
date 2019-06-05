import axios from 'axios';

//=====================
//=== Posts ===========
//=====================

export function getPosts() {
  console.log('axios get req made');
  return axios.get('backend/posts');
}
export function getComments() {
  console.log('axios get req made');
  return axios.get('backend/comments');
}
export function getSinglePost()  {
  return axios.get(`backend/post/${this.props.match.params.id}`)
  }
