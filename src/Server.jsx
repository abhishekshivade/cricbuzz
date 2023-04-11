import axios from "axios"

export default function server() {
  axios.create({
    baseURL: "http://localhost:8000/",
    headers:{
        "content-type":"applocation/json"
    }
  });
}