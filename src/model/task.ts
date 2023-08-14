import {Observable} from 'react-obsidian';
import {uniqueId} from '../utils/uniqueId';

export class Task {
  public readonly id: string = uniqueId();
  public readonly isCompleted: Observable<boolean>;
  public readonly text: Observable<string>;

  constructor(text: string, isCompleted = false) {
    this.text = new Observable(text);
    this.isCompleted = new Observable(isCompleted);
  }
}
