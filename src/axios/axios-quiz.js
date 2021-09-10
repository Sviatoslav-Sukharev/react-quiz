import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-quiz-809b0-default-rtdb.firebaseio.com/",

});

export default instance;