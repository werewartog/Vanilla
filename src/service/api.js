import axios from 'axios';

let username = 'werewartog';

export const getUser = async () => {
  let request = await axios.get(`https://api.github.com/users/${username}`)
  let user = request.data;
  return user
}

export const getUserRepo = async () => {
  let request = await axios.get(`https://api.github.com/users/${username}/repos`)
  let repos = request.data;
  return repos
}

export const getUserRepoFav = async () => {
  let request = await axios.get(`https://api.github.com/search/users?q=followers:%3E1000`)
  let repos = request.data;
  return repos
}
