// const assert = require('assert');

import { addItem, tasksArray } from '../Tasks.js';

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
});