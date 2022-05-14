import {
  addItem, deleteItem, tasksArray, editTasks, clearItems,
} from '../Tasks.js';

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

  test('Delete Item From Array', () => {
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
      index: 2,
    },
  ];

  document.body.innerHTML = '<p class="description" id="para"></p>';
  const para = document.getElementById('para');

  test('is task completed', () => {
    para.innerHTML = 'Hello';
    editTasks(para, myTask[0], myTask);
    expect(myTask[0].description).not.toMatch('Play outside');
  });

  test('is task completed', () => {
    para.innerHTML = 'Hello';
    editTasks(para, myTask[0], myTask);
    expect(myTask[0].description).toMatch('Hello');
  });
});

describe('clear completed tasks', () => {
  let myTasks = [
    {
      description: 'Play outside',
      completed: false,
      index: 1,
    },

    {
      description: 'gym',
      completed: true,
      index: 2,
    },

    {
      description: 'gym',
      completed: false,
      index: 3,
    },
  ];

  myTasks = myTasks.filter((task) => !task.completed);

  test('Check array length after clearing completed tasks', () => {
    clearItems(myTasks);
    expect(myTasks).toHaveLength(2);
    expect(myTasks[0].index).toBe(1);
  });
});