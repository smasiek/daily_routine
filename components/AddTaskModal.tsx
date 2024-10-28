import {Modal, Pressable, StyleSheet, TextInput, useColorScheme, View} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Colors} from "@/constants/Colors";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import React, {useState} from "react";

export default function AddTaskModal({isVisible, children, onClose, addTaskMethod}) {

  const colorScheme = useColorScheme();
  const text: string = Colors[colorScheme ?? 'light'].text;
  const background: string = Colors[colorScheme ?? 'light'].background;
  const accent: string = Colors[colorScheme ?? 'light'].icon;

  const [taskText, onChangeTaskText] = useState('');

  const onPressMethod = () => {
    addTaskMethod({id: Math.floor(Math.random() * (5001)), task: taskText, taskState: false});
    onClose();
    onChangeTaskText('');
  }

  return (
    <View style={styles(isVisible).bg}>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <ThemedView style={styles().modalContent}>
          <ThemedView style={styles(text).titleContainer}>
            <ThemedText style={styles(accent).title}>Add task</ThemedText>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color={accent} size={32}/>
            </Pressable>
          </ThemedView>
          <ThemedView style={styles(text).mainContainer}>
            <TextInput
              style={styles(text).input}
              onChangeText={onChangeTaskText}
              value={taskText}
              placeholder="Write you task here..."
              keyboardType="default"
            />
          </ThemedView>

          <ThemedView style={styles().addTaskContainer}>
            <Pressable onPress={onPressMethod}>
              <ThemedText style={styles(accent).presable}>Add (add SQL LITE)</ThemedText>
            </Pressable>
          </ThemedView>
          {children}
        </ThemedView>
      </Modal>
    </View>

  );
}

const styles = (color = "") => StyleSheet.create({
  bg: {
    display: color ? "flex" : "none",
    height: "100%",
    width: "100%",
    position: "absolute",
    opacity: 0.3,
    backgroundColor: "black",
  },
  modalContent: {
    /*    display:"flex",
        flex:1,*/
    height: '33%',
    width: '80%',
    //backgroundColor: '#25292e',
    borderRadius: 18,
    position: 'absolute',
    top: "30%",
    left: "10%",
    justifyContent: "space-between"
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: color,
    fontSize: 32,
    lineHeight: 36,
    textAlignVertical: 'center',
  },
  mainContainer: {
    justifyContent: "center",
    flex: 1,
  },
  input: {
    padding: 20,
    color: color,
  },
  addTaskContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  presable: {
    padding: 5,
    paddingHorizontal: 20,
    color: color,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: color,
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});
