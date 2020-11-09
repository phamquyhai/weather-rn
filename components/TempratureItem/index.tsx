import React, { memo } from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import Colors from "../../configs/colors";

const TempratureItem = memo(() => {
  return (
    <TouchableOpacity style={{ alignItems: "center", padding: 6 }}>
      <Text style={{ fontSize: 14, fontWeight: "500", color: Colors.Gray5 }}>
        8:30
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: Colors.Gray5,
          marginTop: 24,
        }}
      >
        24°
      </Text>
      <Image
        source={require("../../images/small-sunny.png")}
        style={{ width: 16, height: 14, marginTop: 33 }}
      />
    </TouchableOpacity>
  );
});

export default TempratureItem;
