import axios from 'axios';

let username = 'charrondev';

export const getUser = async () => {
  let request = await axios.get(`https://api.github.com/users/${username}`)
  let user = request.data;
  return user
}
