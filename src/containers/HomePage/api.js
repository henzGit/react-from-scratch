import axios from 'axios';

export default {
  getStuff: (url) => axios.get(url)
}