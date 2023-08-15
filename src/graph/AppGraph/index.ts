import {Singleton, Graph, Provides, ObjectGraph} from 'react-obsidian';
import {TaskTemp, TasksModel} from '../../model/tasksModel';

@Singleton()
@Graph()
export class AppGraph extends ObjectGraph {
  @Provides()
  model(): TasksModel {
    return new TasksModel();
  }

  @Provides()
  tempTask(): TaskTemp {
    return new TaskTemp();
  }
}
