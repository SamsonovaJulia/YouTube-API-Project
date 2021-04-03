import axios from "axios";
const KEY = "AIzaSyB5pukZIfBI6UkflbDTVORiicWxyiGDBZ0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY,
  },
});
