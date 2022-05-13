// const assert = require('assert');

import Task from '../Tasks.js';

describe('Tests', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };

  global.localStorage = localStorageMock;
  const tasksArray = [];
  const taskObj = new Task();

  test('add item to array', () => {
    taskObj.addTask('Play');
    const expected = {
      description: 'Play',
      index: 1,
      complete: false,
    };
    expect(tasksArray).toEqual([expected]);
  });
});