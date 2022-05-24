import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText !== "") {
      setCourseGoals([
        ...courseGoals,
        { id: Math.random().toString(), text: enteredGoalText },
      ]);
    } else if (enteredGoalText === "") {
      alert("Please enter your goals...");
    }
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {courseGoals.length !== 0 && (
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} />;
            }}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        )}
        {courseGoals.length === 0 && (
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Not Found...
          </Text>
        )}
      </View>
    </View>
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
