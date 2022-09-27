import { View, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GoogleMap = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: "AIzaSyDjHVmFYLEyN5J6ebXnNznwWdXP_DrJpIw",
        language: "en",
        type: "(cities)",
      }}
      styles={{
        textInputContainer: {
          borderWidth: 1,
          borderColor: "#6B4EFF",
          height: 48,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 0,
        },
        textInput: {
          marginBottom: 0,
          color: "black",
          fontSize: 16,
          lineHeight: 16,
          fontFamily: "Inter-Regular",
        },
        listView: {
          height: 48,
          borderRadius: 8,
        },
      }}
    />
  );
};
export default GoogleMap;

const styles = StyleSheet.create({
  google: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: "50%",
  },
});
