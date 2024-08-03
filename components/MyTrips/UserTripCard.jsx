import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";

export default function UserTripCard({ trip }) {
  const formatData = () => {};
  return (
    <View
      style={{
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
        }}
        source={require("./../../assets/images/image.jpg")}
      />

      {/* <Image
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
      /> */}

      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          {trip.tripPlan?.trip_details?.destination}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: Colors.GRAY,
          }}
        >
          {moment(formatData.startDate).format("DD MMM YYYY")}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 14,
            color: Colors.GRAY,
          }}
        >
          Traveling:
          {trip?.tripPlan?.trip_details?.travelers}
        </Text>
      </View>
    </View>
  );
}
