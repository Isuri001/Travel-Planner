import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 10,
        }}
      >
        Review Your Trip
      </Text>

      <View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
          }}
        >
          Before generating your trip , please review your selection
        </Text>

        <View
          style={{
            gap: 15,
          }}
        >
          {/* Destination Info */}
          <View
            style={{
              marginTop: 40,
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                paddingTop: 5,
              }}
            >
              📍
            </Text>

            <View>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 20,
                  color: Colors.GRAY,
                }}
              >
                Destination
              </Text>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 18,
                }}
              >
                {tripData?.locationInfo?.name}
              </Text>
            </View>
          </View>

          {/* Date Selected Info */}
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                paddingTop: 5,
              }}
            >
              📆
            </Text>

            <View>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 20,
                  color: Colors.GRAY,
                }}
              >
                Travel Date
              </Text>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 18,
                }}
              >
                {moment(tripData?.startDate).format("DD MMM") +
                  "To " +
                  moment(tripData.endDate).format("DD MMM") +
                  "  "}
                ({tripData?.totalNoOfDays} days)
              </Text>
            </View>
          </View>

          {/* Travelers  Info */}
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                paddingTop: 5,
              }}
            >
              🚌
            </Text>

            <View>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 20,
                  color: Colors.GRAY,
                }}
              >
                Who is Traveling
              </Text>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 18,
                }}
              >
                {tripData?.traveler?.title}
              </Text>
            </View>
          </View>

          {/* Budget  Info */}
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                paddingTop: 5,
              }}
            >
              💰
            </Text>

            <View>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 20,
                  color: Colors.GRAY,
                }}
              >
                Budget
              </Text>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 18,
                }}
              >
                {tripData?.budget}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => onClickContinue()}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 19,
          }}
        >
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
