import http from "../http-common";
import axios from "axios";
import authHeader from "./auth-header";

class UserMessageService {
    getMessages() {
        return axios.get("http://localhost:8080/api/messageController/getAllMessages" , {headers:authHeader()});
    }

    // getMessages(){
    //     return http.get("/messageController/getAllMessages");
    // }

    getMessageById(id) {
        return axios.get(`http://localhost:8080/api/messageController/getAllMessages/${id}` , {headers:authHeader()});
    }

    getMessageByTitle(topic){

        return axios.get(`http://localhost:8080/api/messageController/getAllMessages?topic=${topic}` , {headers:authHeader()});
    }


}

export default new UserMessageService();