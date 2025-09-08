/** @format */

interface TaskDate {
  production: string;
  expiration: string;
}

interface Task {
  id: number;
  text: string;
  period: TaskDate;
}

let task: Partial<Task> = {};

let nextId = 1;

var car: Console = console;

const tasks: Partial<Task>[] = [];

const createTask = (text: string, period?: TaskDate): Partial<Task> => {
  if (!text.length) {
    throw new EvalError();
  }
  task = {
    id: nextId++,
    text,
    ...period,
  };
  tasks.push(task);
  return task;
};

console.log(
  createTask('nothing', {
    production: '2/3/2024',
    expiration: '3/4/2022',
  }),
);
console.log(createTask('todo something'));
car.log(55);
