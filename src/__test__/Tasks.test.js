// const assert = require('assert');

import { addItem, deleteItem, tasksArray } from '../Tasks.js';

describe('Tests', () => {

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

  test('Edit Task Description', () => {
    const localStorageMock = {
      setItem: jest.fn(),
      getItem: jest.fn()
    };
    global.localStorage = localStorageMock;
  });

  test('Update Task Completed Status', () => {});

  test('Clear All Completed', () => {});
});