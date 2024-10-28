import {StyleSheet} from 'react-native';

import React, {FC} from 'react';
import {ThemedView} from "@/components/ThemedView";
import TaskView from "@/components/TaskView";
import {ThemedText} from "@/components/ThemedText";
import {TaskType} from "@/app/(tabs)";

type Props = {
  children: Array<TaskType>,
  removeTask: (id: string) => string
  changeStateOfTask: (id: string, state: boolean) => void
}

const TaskList: FC<Props> = ({children, removeTask, changeStateOfTask}) => {
  const renderTasks = (child: TaskType, index: number) => {
    return (
      <TaskView key={index} task={child} changeStateOfTask={changeStateOfTask} removeTask={removeTask}/>
    )
  }

  const myListEmpty = () => {
    return (
      <ThemedView style={{alignItems: "center"}}>
        <ThemedText style={styles.item}>No data found</ThemedText>
      </ThemedView>
    );
  };

  return <ThemedView>
    {children.length != 0 ?
      children.map((child, index) => renderTasks(child, index)) : myListEmpty()}

  </ThemedView>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },
});

export default TaskList