import {Pressable, StyleSheet, useColorScheme, View} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Colors} from '@/constants/Colors';

export default function ThemedCircleButton({onPress}) {

  const colorScheme = useColorScheme();
  const iconColor: string = Colors[colorScheme ?? 'light'].icon;


  return (
    <View style={styles(iconColor).circleButtonContainer}>
      <Pressable style={styles().circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={36} color={iconColor}/>
      </Pressable>
    </View>
  );
}

const styles = (customColor = '') => StyleSheet.create({
  circleButtonContainer: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: customColor,
    borderRadius: 42,
    padding: 3,
    position: 'absolute',
    left: '80%',
    top: "90%"
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
  },
});