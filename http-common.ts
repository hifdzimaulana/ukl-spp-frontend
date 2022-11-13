import axios from "axios";

const AccessToken = localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN);

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: AccessToken ? "Bearer " + AccessToken : undefined,
  },
});
