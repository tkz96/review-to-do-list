import {
  addItem, deleteItem, tasksArray, editTasks, clearItems, checkItem,
} from '../Tasks.js';

describe('Tests Add and Remove item', () => {
  test('Add Item To Array', () => {
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

describe('Edit/Update/Completed', () => {
  // eslint-disable-next-line prefer-const
  let myTask = [
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

  test('Editing The Task Description', () => {
    para.innerHTML = 'Hello';
    editTasks(para, myTask[0], myTask);
    expect(myTask[0].description).not.toMatch('Play outside');
    expect(myTask[0].description).toMatch('Hello');
  });

  test('Update Item Completed', () => {
    checkItem(myTask, 0);
    expect(myTask[0].completed).toBeTruthy();

    checkItem(myTask, 0);
    expect(myTask[0].completed).toBeFalsy();
  });

  myTask = [
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

  test('Clearing Completed Tasks', () => {
    clearItems(myTask);
    expect(clearItems).toHaveLength(1);
    expect(myTask[0].index).toBe(1);
  });
});