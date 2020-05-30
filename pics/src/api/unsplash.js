import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TX64y1zmIvXrbaZAy0jsRFKJ7LS2rkCqZQ6tKkHZQw4",
  }
});
