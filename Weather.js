import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "eye-off-outline",
    title1: "Fucking",
    title2: "blindness",
    title3: "on my eyes",
    titleColor: "#d9d9d9",
    subTitle: "Ensaio sobre a cegueira",
  },
  Thunderstorm: {
    iconName: "thunderstorm-outline",
    title1: "Fucking",
    title2: "Lightning",
    title3: "every-\nwhere",
    titleColor: "#ffda0f",
    subTitle: "you'd better settle in home",
  },
  Drizzle: {
    iconName: "water-outline",
    title1: "Fucking",
    title2: "Soft",
    title3: "water-\ndrops",
    titleColor: "#13b5dd",
    subTitle: "made me a bit chilled",
  },
  Rain: {
    iconName: "rainy-outline",
    title1: "Fucking",
    title2: "humidity",
    title3: "hell",
    titleColor: "#5a89b1",
    subTitle: "but nice to be home :)",
  },
  Atmosphere: {
    iconName: "airplane-outline",
    title1: "What is",
    title2: "this\nfucking",
    title3: "weather",
    titleColor: "#ffc029",
    subTitle: "what does atmosphere mean?",
  },
  Clear: {
    iconName: "sunny-outline",
    title1: "Fucking",
    title2: "love",
    title3: "is on the air",
    titleColor: "#ff0061",
    subTitle: "everybody couple goes out without me",
  },
  Clouds: {
    iconName: "cloud-outline",
    title1: "It's just",
    title2: "fucking",
    title3: "Gray",
    titleColor: "#888",
    subTitle: "but better than hot shit",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.topContainer}>
        {/* <Ionicons
          size={70}
          name={weatherOptions[condition].iconName}
          style={{ paddingLeft: 20 }}
        /> */}
      </View>
      <Text style={styles.temp}>{temp}°</Text>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title1}</Text>
        <Text
          style={{
            ...styles.title,
            color: weatherOptions[condition].titleColor,
          }}
        >
          {weatherOptions[condition].title2}
        </Text>
        <Text style={styles.title}>{weatherOptions[condition].title3}</Text>
      </View>

      <Text style={{ ...styles.textContainer, ...styles.subTitle }}>
        {weatherOptions[condition].subTitle}
      </Text>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    position: "relative",
  },
  temp: {
    fontSize: 200,
    position: "absolute",
    left: -20,
    top: 80,
    fontWeight: "bold",
    width: "100%",
    maxWidth: "90%",
    color: "#e0e0e0",
  },
  topContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
    overflow: "visible",
    paddingTop: 10,
  },
  titleContainer: {
    flex: 5,
    justifyContent: "flex-end",
    paddingBottom: 30,
    paddingHorizontal: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 73,
    lineHeight: 73 * 0.9,
    paddingTop: 73 - 73 * 0.9,
    marginBottom: -73 + 73 * 0.9,
  },
  subTitle: {
    fontWeight: "600",
    fontSize: 16,
    color: "#888",
    textAlign: "left",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: "5%",
  },
});
