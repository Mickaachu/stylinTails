import axios from 'axios'

const URL = 'https://stylin-tails-api.onrender.com'

async function getData(route) {
    try {
        const response = await axios.get(`${URL}/${route}`)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

async function postData(route, data) {
    try {
        const response = await axios.post(`${URL}/${route}`, data)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

export { getData, postData }