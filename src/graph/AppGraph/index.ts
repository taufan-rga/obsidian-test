import {Singleton, Graph, Provides, ObjectGraph} from 'react-obsidian';
import {TaskTempModel, TasksModel} from '../../model/tasksModel';
import {useTaskTempViewModel} from '../../viewModel/task/taskTempViewModel';

@Singleton()
@Graph()
export class AppGraph extends ObjectGraph {
  @Provides()
  model(): TasksModel {
    return new TasksModel();
  }

  @Provides()
  tempTaskModel(): TaskTempModel {
    return new TaskTempModel();
  }

  @Provides()
  useTaskTempViewModel(tempTaskModel: TaskTempModel) {
    return () => useTaskTempViewModel(tempTaskModel);
  }
}
