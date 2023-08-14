import {Observable} from 'react-obsidian';
import {Task} from './task';

export class TasksModel {
  public tasks = new Observable([
    new Task('Philosopher’s Path', true),
    new Task('Visit the temple'),
    new Task('Drink matcha'),
  ]);

  public addTask(text: string) {
    this.tasks.value = [...this.tasks.value, new Task(text)];
  }

  public deleteTask(task: Task) {
    this.tasks.value = this.tasks.value.filter(t => t.id !== task.id);
  }
}
