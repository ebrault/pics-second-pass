import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 37ad812b117ddfc782666b8f04441f1acdd0ea7c62597c1defbcf7f13341b014'
  }
})
