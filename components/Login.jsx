import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/image 1.webp")}
        style={{
          width: "100%",
          height: 450,
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          AI Travel Planner
        </Text>

        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Discover your next adventure effortlessly . Personalized itineraries
          at your fingerprints. Travel smarter with AI-driven insights .
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "10%",
  },
});
