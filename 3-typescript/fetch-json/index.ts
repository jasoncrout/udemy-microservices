import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

const request = async () => {
  const data = await axios.get(url);
  console.log(data);
};

request();
