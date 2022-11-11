import axios from "axios";

//01001000/json/
//npm install axios

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;