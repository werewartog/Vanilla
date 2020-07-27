import axios from 'axios';

let username = 'werewartog';

export let user;

export const getUser = async() => {
    let request = await axios.get(`https://api.github.com/users/${username}`)
    user = request.data;
    return user
  }