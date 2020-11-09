import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../configs/routes";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../configs/colors";
import WeatherForecast from "../screens/WeatherForecast";
const Stack = createStackNavigator();

const WeatherForecastStack = memo(() => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.WeatherForecast}
        component={WeatherForecast}
        options={{
          headerTitle: "Weather Forecast",
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 7, padding: 8 }}>
              <Feather name={"menu"} size={24} color={Colors.NightRider} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
});

export default WeatherForecastStack;
