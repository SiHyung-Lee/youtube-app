import axios from "axios";

const API_KEY = "AIzaSyDdPAMP51kFNpvdHf9tnrHbjLZUdYPzRtI";
//const API_KEY = 'AIzaSyDkdu3A6GpBqd1K-r-9JBvNIh6xlU4VrmI';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: API_KEY,
    maxResults: 5
  }
});
