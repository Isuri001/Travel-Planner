import { View, Text, FlatList, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { GetPhotoRef } from "../../services/GooglePlaceApi";

export default function HotelList({ hotelList }) {
  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef("Canada");
    console.log(result);
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        🏨 Hotel Recommendation
      </Text>

      {/* <FlatList>
        data={hotelList}
        style=
        {{
          marginTop: 8,
        }}
      </FlatList> */}

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 200,
            borderRadius: 15,
          }}
          source={require("./../../assets/images/Empress.jpg")}
        />
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          The Omni King Edward Hotel
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            ⭐ 3.5
          </Text>

          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            💰$600
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 200,
            borderRadius: 15,
          }}
          source={require("./../../assets/images/caption.jpg")}
        />
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          The Fairmont Le Chateau Laurier
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            ⭐ 4.0
          </Text>

          <Text
            style={{
              fontFamily: "outfit",
            }}
          >
            💰$900
          </Text>
        </View>
      </View>
    </View>
  );
}
