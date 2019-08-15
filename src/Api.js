import axios from 'axios'

let api = axios.create({
    headers: {
        'Client-ID': '6ypw06sp0zt5y8hnw6azwvoh0kbsrx'
    }
})

export default api