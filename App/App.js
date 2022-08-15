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
      {text: enteredGoalText, id: Math.random().toString()},
      // i can use key here instead of the id 
      // when i use the id, i should use key extractor 
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
        <FlatList data={courseGoals} renderItem={itemData => {
          return (
            <View style={styles.goalItem} >
              <Text style={styles.goalText} >{itemData.item.text}</Text>
            </View>
          )
        }} 
        alwaysBounceVertical={false}
        // key extractor for returning the id 
        keyExtractor= {(item, index) => 
        {
          return item.id;
        }}
        />
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
