import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "811085b4de50a1b4746d0d09514cc57b";

export default class extends React.Component {
  state = {
    isLoading: true,
    timePassed: false,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
    setTimeout(() => {
      this.setState({ timePassed: true });
    }, 2500);
  }

  render() {
    const { isLoading, temp, condition, timePassed } = this.state;
    return !timePassed ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition="Clear" />
    );
  }
}
