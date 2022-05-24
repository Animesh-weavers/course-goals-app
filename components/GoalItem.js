import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalItem;
