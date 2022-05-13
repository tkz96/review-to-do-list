// const assert = require('assert');

import { addTask } from '../Tasks.js';

describe('Tests', () => {
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };

  global.localStorage = localStorageMock;
  const tasksArray = [];
  // const taskObj = new Task();

  test('add item to array', () => {
    addTask('Play');
    const expected = {
      complete: false,
      description: 'Play',
      index: 1,
    };
    expect(tasksArray).toBe([expected]);
  });
});