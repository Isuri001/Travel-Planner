import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import UserTripList from "../../components/MyTrips/UserTripList";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails(userTrips) {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);
  const formatData = () => {};
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });

    if (trip) {
      setTripDetails(JSON.parse(trip));
    }
  }, [trip]);

  if (!tripDetails) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const photoRef = tripDetails.locationInfo?.photoRef;
  const destination =
    tripDetails.locationInfo?.name || "No destination available";

  return (
    <ScrollView>
      {photoRef ? (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={{
            width: "100%",
            height: 330,
            objectFit: "cover",
          }}
        />
      ) : (
        <Image
          style={{
            width: "100%",
            height: 330,
            objectFit: "cover",
          }}
          source={require("./../../assets/images/image.jpg")}
        />
      )}
      <View
        style={{
          padding: 16,
          backgroundColor: Colors.WHITE,
          height: "100%",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>Canada</Text>

        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: Colors.GRAY,
          }}
        >
          {moment(UserTripList.startDate).format("DD MMM YYYY")}
        </Text>

        {/* <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: Colors.GRAY,
          }}
        >
          {moment(UserTripList.endDate).format("DD MMM YYYY")}
        </Text> */}

        {/* <Text>🚌 {UserTripList[4]?.tripPlan?.trip_details?.travelers}</Text> */}

        {/* Flight Info */}

        <FlightInfo
          flightData={userTrips[2]?.tripPlan?.trip_details?.flights}
        />

        {/* Hotels List */}

        <HotelList hotelList={tripDetails?.tripPlan?.travelPlan?.hotels} />
        {/* Trip day planner */}

        <PlannedTrip details={tripDetails?.tripPlan?.travelPlan?.itinerary} />
      </View>
    </ScrollView>
  );
}
