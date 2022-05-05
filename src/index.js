import './styles/main.css';
import {
  addTask, editTasks, check, clear,
} from './Tasks.js';

const addBtn = document.getElementById('add-btn');
const todoListUL = document.querySelector('.todo-list');
const clearBtn = document.getElementById('clear-btn');

window.addEventListener('DOMContentLoaded', () => {
  addBtn.addEventListener('click', addTask);

  todoListUL.addEventListener('focusout', (e) => editTasks(e));
  todoListUL.addEventListener('change', (e) => check(e));

  clearBtn.addEventListener('click', clear);
});