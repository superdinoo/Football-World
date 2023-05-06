import axios from 'axios';
export const apiCreate = axios.create({
  baseURL: 'https://api.football-data.org/v2/',
  headers: { 'X-Auth-Token': '57cfaf485b6645c69da1e555276e4bd8' },
});
