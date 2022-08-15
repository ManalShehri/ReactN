import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enterdText) {
    setEnteredGoalText(enterdText);
  }; 
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }
  // ;

  return (
    <View style ={styles.appContainer}>
      <View style ={styles.inputContainer}>
        <TextInput 
          style ={styles.textInput} 
          placeholder='Your Course Goal!' 
          onChangeText={goalInputHandler} 
        />
        <Button title='Add Goal' onPress={addGoalHandler} /> 
      </View>
      <View style={styles.goalsContianer}>
        <ScrollView >
          {courseGoals.map((goal) => 
            <View style={styles.goalItem}  key={goal}>
              <Text style={styles.goalText} >{goal}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  goalsContianer: {
    paddingTop: 30

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%', 
    marginRight: 8,
    padding: 8
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
