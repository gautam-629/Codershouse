import axios from 'axios';

const api=axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
    },
});

// list of all the end point    
export const sendOtp= (data)=>{
   return api.post('/api/send-otp',data);
}

export default api;