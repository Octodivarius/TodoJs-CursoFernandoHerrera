// import { saludar } from './js/componentes';

import './styles.css';


import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

todoList.todos.forEach(todo  => crearTodoHtml( todo));


todoList.todos[0].imprimirClase();


console.log( 'Todos' ,  todoList.todos );



