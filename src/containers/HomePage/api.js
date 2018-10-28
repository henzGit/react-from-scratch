import axios from 'axios';

const url = 'https://api.github.com/users/henzGit/repos?type=all&sort=updated';
export default {
  getStuff: () => axios.get(url);
}