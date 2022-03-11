import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:3000'
    // baseURL: 'https://jsonplaceholder.typicode.com'
   baseURL: 'https://challenge.lexicondigital.com.au/api/v2'
})