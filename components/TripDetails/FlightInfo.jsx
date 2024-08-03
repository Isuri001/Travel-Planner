import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function FlightInfo({ flightData }) {
  return (
    <View
      style={{
        marginTop: 15,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          ✈️Flights{flightData?.price}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 5,
            width: 100,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "outfit",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 15,
          fontFamily: "outfit",
        }}
      >
        Airline : Air Canada
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "outfit",
        }}
      >
        Price : $600{" "}
      </Text>
    </View>
  );
}
