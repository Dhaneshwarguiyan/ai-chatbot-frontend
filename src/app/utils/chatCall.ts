import axios from "axios"

export const chatBot = async (text:string)=>{
    const response = await axios.post('http://localhost:4000/api/chat',{
        message:text
    })
    return response;
}

