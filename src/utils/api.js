import axios from "axios";
export const apiCreate = axios.create({
  baseURL: "https://api.football-data.org/v2/",
  headers: { "X-Auth-Token": "dd127c2af68b49d9a207d889c5c7f97e" },
});
