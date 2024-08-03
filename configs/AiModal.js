const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: " Generate travel plan for location:  Canada, for 4 days and 3 night for Family with a Luxury budget with a flight details , flight price with booking url hotels options list with hotel name , hotel address , price , hotel image url , geo coordinates , rating descriptions and places to visit nearby with place name , place details, place image url , geo coordinates , ticket pricing time to travel each of the location for 4 days and 3 night with each day plan with best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "trip_details": {\n    "destination": "Canada",\n    "duration": "4 days 3 nights",\n    "budget": "Luxury",\n    "travelers": "Family"\n  },\n  "flights": [\n    {\n      "airline": "Air Canada",\n      "flight_number": "AC123",\n      "departure_city": "New York City",\n      "arrival_city": "Toronto",\n      "departure_date": "2024-03-15",\n      "arrival_date": "2024-03-15",\n      "price": "$500",\n      "booking_url": "https://www.aircanada.com"\n    },\n    {\n      "airline": "WestJet",\n      "flight_number": "WS456",\n      "departure_city": "Toronto",\n      "arrival_city": "New York City",\n      "departure_date": "2024-03-18",\n      "arrival_date": "2024-03-18",\n      "price": "$450",\n      "booking_url": "https://www.westjet.com"\n    }\n  ],\n  "hotels": [\n    {\n      "hotel_name": "The Omni King Edward Hotel",\n      "hotel_address": "37 King St E, Toronto, ON M5C 1E9, Canada",\n      "price": "$400-$600 per night",\n      "hotel_image_url": "https://www.omnihotels.com/hotels/toronto/images/hotel-exterior/omni-king-edward-hotel-exterior.jpg",\n      "geo_coordinates": "43.6492,-79.3824",\n      "rating": 4.5,\n      "rating_description": "Excellent service, luxurious amenities, and a prime location in downtown Toronto.",\n      "places_to_visit_nearby": [\n        {\n          "place_name": "Royal Ontario Museum",\n          "place_details": "One of Canada\'s largest museums with a diverse collection of artifacts and exhibits.",\n          "place_image_url": "https://www.rom.on.ca/sites/default/files/styles/carousel_slide_image/public/images/exhibitions/exhibitions-carousel-2.jpg?itok=b_X4qP7S",\n          "geo_coordinates": "43.6686,-79.3949",\n          "ticket_pricing": "$25",\n          "time_to_travel": "15 minutes"\n        },\n        {\n          "place_name": "CN Tower",\n          "place_details": "Iconic landmark offering breathtaking views of the city from its observation deck.",\n          "place_image_url": "https://www.cntower.ca/sites/default/files/media/images/cntower-exterior-hero-2021_0.jpg",\n          "geo_coordinates": "43.6425,-79.3871",\n          "ticket_pricing": "$40",\n          "time_to_travel": "10 minutes"\n        }\n      ]\n    },\n    {\n      "hotel_name": "The Fairmont Le Chateau Laurier",\n      "hotel_address": "1 Rideau St, Ottawa, ON K1N 8S7, Canada",\n      "price": "$350-$550 per night",\n      "hotel_image_url": "https://www.fairmont.com/media/images/hotel-pages/hero/le-chateau-laurier-hero.jpg",\n      "geo_coordinates": "45.4215,-75.6972",\n      "rating": 4.8,\n      "rating_description": "Historic charm, elegant rooms, and exceptional dining experiences.",\n      "places_to_visit_nearby": [\n        {\n          "place_name": "Parliament Hill",\n          "place_details": "The heart of Canadian government with beautiful architecture and a changing of the guard ceremony.",\n          "place_image_url": "https://www.canada.ca/content/dam/canada/en/department-heritage/images/canadian-heritage/parliament-hill-and-peace-tower.jpg",\n          "geo_coordinates": "45.4237,-75.7001",\n          "ticket_pricing": "Free",\n          "time_to_travel": "5 minutes"\n        },\n        {\n          "place_name": "ByWard Market",\n          "place_details": "Vibrant marketplace offering local produce, artisan goods, and street food.",\n          "place_image_url": "https://www.bywardmarket.com/sites/default/files/images/slideshow/byward-market-night-market.jpg",\n          "geo_coordinates": "45.4206,-75.6978",\n          "ticket_pricing": "Free",\n          "time_to_travel": "10 minutes"\n        }\n      ]\n    }\n  ],\n  "daily_plans": [\n    {\n      "day": 1,\n      "activities": [\n        {\n          "time": "Morning (9:00 AM - 12:00 PM)",\n          "activity": "Explore the Royal Ontario Museum",\n          "description": "Discover ancient civilizations, natural history, and Canadian art at this world-renowned museum."\n        },\n        {\n          "time": "Afternoon (1:00 PM - 4:00 PM)",\n          "activity": "Visit the CN Tower",\n          "description": "Ascend to the top for breathtaking panoramic views of Toronto."\n        },\n        {\n          "time": "Evening (5:00 PM - 8:00 PM)",\n          "activity": "Enjoy dinner at a fine dining restaurant in downtown Toronto",\n          "description": "Indulge in a memorable culinary experience at one of Toronto\'s renowned restaurants."\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "activities": [\n        {\n          "time": "Morning (9:00 AM - 12:00 PM)",\n          "activity": "Take a scenic cruise on Lake Ontario",\n          "description": "Enjoy breathtaking views of the Toronto skyline and the lake from a comfortable cruise ship."\n        },\n        {\n          "time": "Afternoon (1:00 PM - 4:00 PM)",\n          "activity": "Visit the Art Gallery of Ontario",\n          "description": "Explore a world-class collection of Canadian and international art."\n        },\n        {\n          "time": "Evening (5:00 PM - 8:00 PM)",\n          "activity": "Attend a performance at the Royal Alexandra Theatre",\n          "description": "Experience the magic of live theatre in this historic venue."\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "activities": [\n        {\n          "time": "Morning (9:00 AM - 12:00 PM)",\n          "activity": "Travel to Ottawa by train (2 hours)",\n          "description": "Enjoy a scenic train journey to Canada\'s capital city."\n        },\n        {\n          "time": "Afternoon (1:00 PM - 4:00 PM)",\n          "activity": "Visit Parliament Hill",\n          "description": "Take a guided tour of the Parliament Buildings and witness the changing of the guard ceremony."\n        },\n        {\n          "time": "Evening (5:00 PM - 8:00 PM)",\n          "activity": "Explore the ByWard Market",\n          "description": "Sample local delicacies, shop for souvenirs, and enjoy the lively atmosphere of this historic market."\n        }\n      ]\n    },\n    {\n      "day": 4,\n      "activities": [\n        {\n          "time": "Morning (9:00 AM - 12:00 PM)",\n          "activity": "Visit the Canadian War Museum",\n          "description": "Learn about Canada\'s military history and its role in global conflicts."\n        },\n        {\n          "time": "Afternoon (1:00 PM - 4:00 PM)",\n          "activity": "Enjoy a leisurely lunch at a cafe in Ottawa",\n          "description": "Sample local cuisine and relax in a charming café."\n        },\n        {\n          "time": "Evening (5:00 PM - 8:00 PM)",\n          "activity": "Return to Toronto by train (2 hours)",\n          "description": "Enjoy a scenic train journey back to Toronto."\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This is just a sample itinerary and can be customized based on your preferences and interests.\n* Flight prices and hotel rates are approximate and may vary depending on the time of year and availability.\n* You can use the provided booking URLs to search for flights and hotels.\n* The places to visit are just suggestions, and you can explore other attractions in Toronto and Ottawa.\n* It\'s advisable to book flights and hotels in advance, especially during peak travel season.\n* Be sure to check visa requirements for Canada based on your nationality.\n* Remember to pack appropriate clothing for the weather conditions in Canada. \n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
