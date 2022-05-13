const tasksArray = [];

export default class Task {
  constructor(description) {
    this.index = tasksArray.length + 1;
    this.description = description;
    this.completed = false;
  }
}
