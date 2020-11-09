import React, { memo } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Colors from "../configs/colors";
import { FontAwesome } from "@expo/vector-icons";
import TempratureItem from "../components/TempratureItem";

const WeatherForecast = memo(() => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttonLocation}>
          <FontAwesome name={"location-arrow"} color={Colors.Gray5} size={20} />
          <Text style={styles.textButtonLocation}>Poway, California</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.tempView}>
          <Text style={styles.textTemp}>33°C</Text>
          <View style={{ alignItems: "center", marginTop: 12 }}>
            <Image
              source={require("../images/sunny-cloudy.png")}
              style={{ marginBottom: 10 }}
            />
            <Text style={{ fontSize: 14, color: Colors.Blue5 }}>Sunny</Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 24,
            borderBottomWidth: 1,
            borderBottomColor: Colors.Gray2,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <TempratureItem />
        </View>
      </View>
    </View>
  );
});

export default WeatherForecast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    padding: 14,
  },
  buttonLocation: {
    backgroundColor: Colors.Gray2,
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  textButtonLocation: {
    color: Colors.Gray5,
    marginLeft: 16,
    fontSize: 14,
  },
  textTemp: {
    color: Colors.NightRider,
    fontSize: 50,
    fontWeight: "300",
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },
  tempView: {
    paddingBottom: 39,
    borderBottomColor: Colors.Gray2,
    borderBottomWidth: 1,
    width: "100%",
    alignItems: "center",
  },
});
