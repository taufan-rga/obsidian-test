import {Observable} from 'react-obsidian';

export class CounterModel {
  public readonly count = new Observable(0);

  public increment() {
    this.count.value++;
  }
}
