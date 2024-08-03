import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function PlannedTrip({ details }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          paddingTop: 20,
          fontFamily: "outfit-bold",
        }}
      >
        🏝️ Plan Details
      </Text>

      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 19,
            marginTop: 15,
          }}
        >
          Day 1
        </Text>

        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          Explore the Royal Ontario Museum
        </Text>
        <View>
          <Image
            style={{
              width: "100%",
              height: 200,
              borderRadius: 15,
              paddingTop: 5,
            }}
            source={require("./../../assets/images/im1.jpg")}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit",
          }}
        >
          Discover ancient civilizations, natural history, and Canadian art at
          this world-renowned museum
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          🎟️ Ticket Price : Free
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          🕛 Time To Travel : 2-3 hours
        </Text>

        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          Visit the Art Gallery of Ontario
        </Text>
        <View>
          <Image
            style={{
              width: "100%",
              height: 200,
              borderRadius: 15,
              paddingTop: 5,
            }}
            source={require("./../../assets/images/im4.jpg")}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit",
          }}
        >
          Explore a world-class collection of Canadian and international art.
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          🎟️ Ticket Price : Free
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          🕛 Time To Travel : 2-3 hours
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 19,
            marginTop: 15,
          }}
        >
          Day 2
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          Take a scenic cruise on Lake Ontario
        </Text>

        <View>
          <Image
            style={{
              width: "100%",
              height: 200,
              borderRadius: 15,
              paddingTop: 5,
            }}
            source={require("./../../assets/images/im2.jpg")}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit",
          }}
        >
          Enjoy breathtaking views of the Toronto skyline and the lake from a
          comfortable cruise ship
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          🎟️ Ticket Price : Free
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          🕛 Time To Travel : 2-3 hours
        </Text>

        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          Attend a performance at the Royal Alexandra Theatre
        </Text>

        <View>
          <Image
            style={{
              width: "100%",
              height: 200,
              borderRadius: 15,
              paddingTop: 5,
            }}
            source={require("./../../assets/images/im5.jpg")}
          />
        </View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit",
          }}
        >
          Experience the magic of live theatre in this historic venue
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          🎟️ Ticket Price : Free
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          🕛 Time To Travel : 2-3 hours
        </Text>
      </View>
    </View>
  );
}
