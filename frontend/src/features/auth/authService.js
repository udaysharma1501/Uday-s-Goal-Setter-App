import axios from 'axios';

const API_URL = "/api/users/";

// register user
const register = async(userData) => {
    // this will make the request and put the returned response into the response variable
    const response = await axios.post(API_URL, userData);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
}

const authService = {
    register
}

export default authService;