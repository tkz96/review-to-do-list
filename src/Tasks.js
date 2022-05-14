// eslint-disable-next-line import/no-mutable-exports
let tasksArray = [];
const input = document.querySelector('.input');
const todoList = document.querySelector('.todo-list');

class Task {
  constructor(description) {
    this.completed = false;
    this.description = description;
    this.index = tasksArray.length + 1;
  }
}

const populateList = (tasksArray) => {
  // todoList.innerHTML = '';
  for (let i = 0; i < tasksArray.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = `
    <input type="checkbox" class="checkbox" data_id='${i}' ${tasksArray[i].completed ? 'checked' : ''}>
    <div class="task-text ${tasksArray[i].completed ? 'line' : ''}" contenteditable="true" data_id='${i}'>${tasksArray[i].description}</div>
    <i class="fas fa-trash-alt delete" data_id='${i}'></i>
    `;
    todoList.appendChild(li);
  }
};

function clearData() {
  input.value = '';
}

function updateLS(tasksArray) {
  localStorage.setItem('task', JSON.stringify(tasksArray));
}

const updateIndex = () => {
  for (let i = 0; i < tasksArray.length; i += 1) {
    tasksArray[i].index = i + 1;
  }
};

const addItem = (description) => {
  const task = new Task(description);
  tasksArray.push(task);
};

function deleteItem(targetNode) {
  tasksArray.splice(targetNode, 1);
}

// delete tasks
document.addEventListener('DOMContentLoaded', () => {
  todoList.addEventListener('click', (e) => {
    if (e.target.className.includes('delete')) {
      deleteItem(e.target.getAttribute('data_id'));
      updateIndex();
      updateLS(tasksArray);
      e.target.parentNode.remove();
    }
  });
});

function addTask() {
  addItem();
  populateList(tasksArray);
  updateLS(tasksArray);
  clearData();
}

const editTasks = (text, task, tasksArray) => {
  // if (e.target.className.includes('task-text')) {
  //   tasksArray[e.target.getAttribute('data_id')].description = e.target.innerText;
  //   updateLS(tasksArray);
  // }
  task.description = text.innerHTML;
  text.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      task.description = text.innerHTML;
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
      text.parentElement.classList.remove('inputEdit');
      text.setAttribute('contenteditable', 'false');
    }
  });
};

const check = (e) => {
  if (e.target.className.includes('checkbox')) {
    const { checked } = e.target;
    const text = e.target.parentNode.querySelector('.task-text');
    if (checked) {
      text.classList.add('line');
    } else {
      text.classList.remove('line');
    }
    tasksArray[e.target.getAttribute('data_id')].completed = checked;
  }
  updateLS(tasksArray);
};

const clearItems = () => {
  tasksArray = tasksArray.filter((task) => (task.completed === false));
};

const clear = () => {
  clearItems();
  updateLS(tasksArray);
  populateList(tasksArray);
};

export {
  addItem, tasksArray, deleteItem, addTask, editTasks, check, clear, Task,
};

populateList(tasksArray);
