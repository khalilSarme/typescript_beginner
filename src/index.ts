/** @format */

interface TaskDate {
  production: string;
  expiration: string;
}

interface Task {
  id?: number;
  text?: string;
  period?: TaskDate;
}

let task: Task = {};

let nextId = 1;

var c: Console = console;

const tasks: Task[] = [];

const createTask = (text: string, period?: TaskDate): Task => {
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

c.log(
  createTask('nothing to add', {
    production: '2/3/2024',
    expiration: '3/4/2022',
  }),
);
c.log(createTask('todo something', {production: '2/2/2024',expiration: '3/2/2028'}));
c.table(tasks)