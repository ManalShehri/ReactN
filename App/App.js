import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
      // i can use key here instead of the id 
      // when i use the id, i should use key extractor 
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHanndler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    // StatusBar for the time battrey at the top of the phone 
    <>
      <StatusBar style='light' /> 
      <View style ={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color="#a065ec"
          onPress={startAddGoalHandler}
          />

        <GoalInput 
          visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContianer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return (
              <GoalItem 
                text={itemData.item.text} 
                id = {itemData.item.id}
                onDeleteItem={deleteGoalHanndler}
              />
            );
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContianer: {
    flex: 5
  },
});
