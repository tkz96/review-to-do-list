import { addItem, deleteItem, tasksArray, editTasks, check, clear, Task } from '../Tasks.js';

describe('Tests Add and Remove item', () => {
  test('add item to array', () => {
    addItem('Play');
    const expected = {
      completed: false,
      description: 'Play',
      index: 1,
    };
    expect(tasksArray).toEqual([expected]);
  });

  test('delete item from array', () => {
    deleteItem(0);
    expect(tasksArray).toEqual([]);
  });
});

describe('updating an item completed status', () => {
  const myTask = [
    {
      completed: false,
      description: 'Play outside',
      index: 1,
    },
    {
      completed: false,
      description: 'gym',
      index: 1,
    }
  ];

  document.body.innerHTML = '<p class="description" id="para"></p>';
  const para = document.getElementById('para');

  test('is task completed', () =>{
    para.innerHTML = 'Hello';
    editTasks(para, myTask[0],myTask);
    expect(myTask[0].description).not.toMatch('Play outside');
  });

  test('is task completed', () =>{
    para.innerHTML = 'Hello';
    editTasks(para, myTask[0],myTask);
    expect(myTask[0].description).toMatch('Hello');
  });
});