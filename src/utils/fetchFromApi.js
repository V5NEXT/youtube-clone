import axios from "axios";

const BaseUrl = "https://youtube-v31.p.rapidapi.com/search"

const options = {
    url: BaseUrl,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };