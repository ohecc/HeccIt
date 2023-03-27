import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";


const Timer = () => {
    const [pomodoro, setPomodoro] = useState(6);
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [init, setInit] = useState(true);
    const [counter, setCounter] = useState(false);
    const [intervalId, setIntervalId] = useState("123");

    const startTimeCount = () => {
    if (!counter) {
        setInit(false);
        setCounter(true);
        if (init === true) {
        setSeconds(59);
        setMinutes((prevMinutes) => prevMinutes - 1);
        }
        const interval = setInterval(() => {
        setSeconds((prevSecond) => prevSecond - 1);
        }, 1000);
        setIntervalId(interval);
    } else {
        console.log("started");
    }
    };

    const stop = () => {
    console.log(intervalId);
    console.log("stop");
    setCounter(false);
    return clearInterval(intervalId);
    };

    const reset = () => {
    setCounter(false);
    setMinutes(25);
    setSeconds(0);
    setInit(true);
    setPomodoro(0);
    clearInterval(intervalId);
    setIntervalId("123");
    };

useEffect(() => {
  if (seconds === -1 && init === false && minutes !== 0) {
    setMinutes((prevMinutes) => prevMinutes - 1);
    setSeconds(59);
  } else if (minutes === 0 && seconds === -1 && pomodoro === 6) {
    setPomodoro(5);
    setMinutes(5);
    setSeconds(0);
    setCounter(false);
    clearInterval(intervalId);
    console.log("done");
  } else if (minutes === 0 && seconds === -1 && pomodoro === 5) {
    setPomodoro(6);
    setMinutes(6);
    setSeconds(0);
    setCounter(false);
    clearInterval(intervalId);
    return console.log("done");
  }
}, [seconds]);

return (
  <View style={styles.container}>
    <Text style={styles.text}>
      {seconds.toString().length === 2
        ? `${minutes}:${seconds}`
        : `${minutes}:0${seconds}`}
    </Text>
    <View style={styles.buttonView}>
      <View style={styles.button}>
        <Button
          color="green"
          onPress={() => startTimeCount()}
          title="Start"
        />
      </View>
      <View style={styles.button}>
        <Button onPress={() => stop()} color="red" title="Stop" />
      </View>
      <View style={styles.button}>
        <Button onPress={reset} title="Reset" />
      </View>
    </View>
    <StatusBar style="auto" />
  </View>
)

}

export default Timer;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 80,
    },
    buttonView: {
      flexDirection: "row",
      display: "flex",
      marginTop: 20,
      width: "50%",
      justifyContent: "space-between",
    },
    button: {
      paddingRight: 10,
      paddingLeft: 10,
    },
  });