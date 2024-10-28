import {StyleSheet} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import Ionicons from "@expo/vector-icons/Ionicons";
import ThemedCircleButton from "@/components/ThemedCircleButton";
import {useState} from "react";
import AddTaskModal from "@/components/AddTaskModal";
import TaskList from "@/components/TaskList";

export type TaskType = {
  id: string,
  task: string,
  taskState: boolean
}

const dummyTasks: Array<TaskType> = [
  {
    id: "1",
    task: "Do something",
    taskState: true
  },
  {
    id: "2",
    task: "Do something more",
    taskState: false
  }
]

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Array<TaskType>>(dummyTasks)

  const addTask = () => {
    setIsModalVisible(true);
  }

  const closeAddTask = () => {
    setIsModalVisible(false);
  }

  const pushTask = (task: TaskType) => {
    tasks.push(task);
    setTasks(tasks);
  }

  const changeStateOfTask = (id: string, state: boolean) => {

    setTasks(tasks.map((task: TaskType) => {
        if (task.id === id) {
          return {id: task.id, task: task.task, taskState: state} as TaskType
        } else {
          return task
        }
      }
    ))
  }

  const removeTask = (id: string) => {
    const filteredTasks = tasks.filter((task: TaskType) => task.id !== id);
    setTasks(filteredTasks);
    return id;
  }

  return (
    <ThemedView style={styles.mainContainer}>
      <ParallaxScrollView
        headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
        headerImage={
          <Ionicons size={184} style={styles.reactLogo} name={"list"}/>
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to</ThemedText>
          <ThemedView style={styles.nameContainer}>
            <ThemedText type="title">Daily Routine App!</ThemedText>
            <HelloWave/>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.tasksContainer}>
          <TaskList changeStateOfTask={changeStateOfTask} removeTask={removeTask} children={tasks}/>
        </ThemedView>
      </ParallaxScrollView>
      <AddTaskModal isVisible={isModalVisible} onClose={closeAddTask} addTaskMethod={pushTask}/>
      <ThemedCircleButton onPress={addTask}/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  tasksContainer: {
    gap: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    borderWidth: 1,
    padding: 15,
    alignItems: 'flex-end',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
    color: '#0a7ea4'
  },
});
