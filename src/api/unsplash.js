import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Q-0nHPzoioQsoAPtAa-9mQh7Wg5_b0jN6gApqhVDauU'
  }
})