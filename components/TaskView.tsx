import React, {FC, useRef} from "react";
import {ThemedView} from "@/components/ThemedView";
import {Pressable, StyleSheet} from "react-native";
import CheckBox from 'react-native-check-box'
import {TaskType} from "@/app/(tabs)";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  task: TaskType,
  changeStateOfTask: (id: string, state: boolean) => void
  removeTask: (id: string) => string
}

const TaskView: FC<Props> = ({task, changeStateOfTask, removeTask}) => {

  const checkboxChecked = useRef(task.taskState);

  const onDelete = () => {
    removeTask(task.id) //TODO Z JAKIEGOS POWODU PO USUNIECIU ELEMENTU Z LISTY NIE AKTUALIZUJE SIE STAN CHECKBOXOW, ZOBACZYC DLACZEGO
  }

  return (
    <ThemedView style={styles.taskContainer}>
      <CheckBox
        style={{flex: 1, paddingVertical: 10}}
        onClick={() => {
          checkboxChecked.current = (!checkboxChecked.current)
          changeStateOfTask(task.id, checkboxChecked.current)
        }}
        isChecked={checkboxChecked.current}
        rightText={task.task}
      />
      <Pressable onPress={onDelete}>
        <MaterialIcons name="delete" size={24}/>
      </Pressable>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
  },
})

export default TaskView
