import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    if (enteredGoalText !== "") {
      setCourseGoals([
        ...courseGoals,
        { id: Math.random().toString(), text: enteredGoalText },
      ]);
      // setEnteredGoalText("");
    } else if (enteredGoalText === "") {
      alert("Please enter your goals...");
    }
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          defaultValue={enteredGoalText}
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.length !== 0 && (
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <View style={styles.goalItem}>
                  <Text style={styles.goalItemText}>{itemData.item.text}</Text>
                </View>
              );
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalItemText: {
    color: "white",
  },
});
