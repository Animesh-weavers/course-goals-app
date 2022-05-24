import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Button,
  StatusBar,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText !== "") {
      setCourseGoals([
        ...courseGoals,
        { id: Math.random().toString(), text: enteredGoalText },
      ]);
    } else if (enteredGoalText === "") {
      alert("Please enter your goals...");
    }
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#311b6b"
        showHideTransition="slide"
      />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {courseGoals.length !== 0 && (
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => item.id}
              alwaysBounceVertical={false}
            />
          )}
          {courseGoals.length === 0 && (
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              No Goals Found...
            </Text>
          )}
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
  },
  goalsContainer: {
    flex: 5,
  },
});
