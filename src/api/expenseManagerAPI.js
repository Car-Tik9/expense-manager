import axios from 'axios';

export default axios.create({
    baseURL:'http://192.168.1.113:5000/expense'
})