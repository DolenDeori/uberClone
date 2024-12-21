import { useLocationStore } from "@/store";
import { Text, View } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <View>
      <Text>You are here: {userAddress}</Text>
      <Text>You are going to: {destinationAddress}</Text>
    </View>
  );
};

export default FindRide;
