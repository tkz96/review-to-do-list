// const assert = require('assert');

import { addItem, deleteItem, tasksArray } from '../Tasks.js';

describe('Tests', () => {
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