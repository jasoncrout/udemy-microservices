import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (
  id: Todo["id"],
  title: Todo["title"],
  completed: Todo["completed"],
) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished?: ${completed}
  `);
};

const request = async () => {
  const response = await axios.get(url);
  const todo = response.data as Todo;

  const { id, title, completed } = todo;

  console.log(todo);
  logTodo(id, title, completed);
};

request();
