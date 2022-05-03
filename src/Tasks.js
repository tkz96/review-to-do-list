let tasksArray = JSON.parse(localStorage.getItem('task')) || [];
const input = document.querySelector('.input');
const todoList = document.querySelector('.todo-list');

export default class Task {
  constructor(description) {
    this.index = tasksArray.length + 1;
    this.description = description;
    this.completed = false;
  }
}

const populateList = (tasksArray) => {
  todoList.innerHTML = '';
  for (let i = 0; i < tasksArray.length; i += 1) {
    const li = document.createElement('li');
    //  li.id = `${tasksArray[i].index}`;
    li.innerHTML = `<input type="checkbox" class="checkbox" data_id='${i}' ${tasksArray[i].completed ? 'checked' : ''}><div class="task-text ${tasksArray[i].completed ? 'line' : ''}" contenteditable="true" data_id='${i}'>${tasksArray[i].description}</div>
        <i class="fas fa-trash-alt delete" data_id='${i}'></i>`;
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

export function addTask() {
  if (input.value.trim() !== '') {
    const task = new Task(input.value);
    tasksArray.push(task);
    populateList(tasksArray);
    updateLS(tasksArray);
    clearData();
  }
}

// delete tasks
todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    tasksArray = tasksArray.filter((task) => task.index !== +(e.target.parentNode.id));
    updateIndex();
    updateLS(tasksArray);
    e.target.parentNode.remove();
  }
});

export const editTasks = (e) => {
  if (e.target.className.includes('task-text')) {
    tasksArray[e.target.getAttribute('data_id')].description = e.target.innerText;
    updateLS(tasksArray);
  }
};

export const check = (e) => {
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

export const clear = () => {
  tasksArray = tasksArray.filter((task) => (task.completed === false));
  updateLS(tasksArray);
  populateList(tasksArray);
};

populateList(tasksArray);