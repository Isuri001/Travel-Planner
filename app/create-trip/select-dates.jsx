import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import { Calendar } from "react-native-calendars";
import dayjs from "dayjs";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectDate() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState({});
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, [navigation]);

  const OnDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      ToastAndroid.show("Please select Start and End Date", ToastAndroid.LONG);
      return;
    }

    const start = dayjs(startDate);
    const end = dayjs(endDate);
    const totalNoOfDays = end.diff(start, "day");

    console.log("Start Date: ", startDate);
    console.log("End Date: ", endDate);
    console.log("Total Number of Days: ", totalNoOfDays + 1);

    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });
  };

  const onDayPress = (day) => {
    const dateString = day.dateString;

    if (!startDate || (startDate && endDate)) {
      setStartDate(dateString);
      setEndDate(null);
      setSelectedDates({
        [dateString]: {
          selected: true,
          marked: true,
          selectedColor: Colors.PRIMARY,
        },
      });
    } else if (startDate && !endDate) {
      const startDateObj = dayjs(startDate);
      const endDateObj = dayjs(dateString);
      const diff = endDateObj.diff(startDateObj, "day");

      if (diff <= 5 && diff >= 0) {
        setEndDate(dateString);
        const range = createDateRange(startDate, dateString);
        const newMarkedDates = range.reduce((acc, date) => {
          acc[date] = {
            selected: true,
            marked: true,
            selectedColor: Colors.PRIMARY,
          };
          return acc;
        }, {});
        setSelectedDates(newMarkedDates);
      } else if (diff < 0) {
        setStartDate(dateString);
        setSelectedDates({
          [dateString]: {
            selected: true,
            marked: true,
            selectedColor: Colors.PRIMARY,
          },
        });
      } else {
        alert("Range exceeds maximum of 5 days.");
      }
    }
  };

  const createDateRange = (start, end) => {
    let dates = [];
    let currDate = dayjs(start);
    const lastDate = dayjs(end);
    while (currDate <= lastDate) {
      dates.push(currDate.format("YYYY-MM-DD"));
      currDate = currDate.add(1, "day");
    }
    return dates;
  };

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
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <Calendar
          onDayPress={onDayPress}
          markedDates={selectedDates}
          minDate={dayjs().format("YYYY-MM-DD")}
        />
      </View>

      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
