import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";

export default function UserTripList({ userTrips }) {
  // Handle the possibility of userTrips being empty or undefined
  if (!userTrips || userTrips.length === 0) {
    return (
      <View>
        <Text>No trips available</Text>
      </View>
    );
  }

  let LatestTrip;
  try {
    LatestTrip =
      typeof userTrips[0].tripData === "string"
        ? JSON.parse(userTrips[0].tripData)
        : userTrips[0].tripData;
  } catch (error) {
    console.error("Failed to parse tripData:", error);
    return (
      <View>
        <Text>Failed to load trip data</Text>
      </View>
    );
  }

  const destination =
    LatestTrip.locationInfo?.name || "No destination available";
  const startDate = LatestTrip.startDate
    ? moment(LatestTrip.startDate).format("DD MMM YYYY")
    : "No start date available";
  const travelerTitle =
    LatestTrip.traveler?.title || "No traveler info available";

  return (
    <View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        {LatestTrip?.locationInfo?.photoRef ? (
          <Image
            source={{
              uri:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
                LatestTrip.locationInfo.photoRef +
                "&key=" +
                process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
            }}
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        ) : (
          <Image
            style={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: 15,
            }}
            source={require("./../../assets/images/imm.webp")}
          />
        )}

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            {userTrips[4]?.tripPlan?.trip_details?.destination}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {moment(LatestTrip.startDate).format("DD MMM YYYY")}
            </Text>

            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              🚌 {userTrips[4]?.tripPlan?.trip_details?.travelers}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 15,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "outfit-medium",
                fontSize: 15,
              }}
            >
              See Your Plan
            </Text>
          </TouchableOpacity>
        </View>

        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
}
