import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import cameraImage from "../assets/img/camera.png";
import galleryImage from "../assets/img/gallery.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as ImagePicker from "react-native-image-picker";
import { PermissionsAndroid } from "react-native";
import OtpButton from "../Ui/otpButton";

const ImageePicker = () => {
  const [responseCamera, setResponseCamera] = React.useState(null);
  const [responseGallery, setResponseGallery] = React.useState(null);

  const openCameraWithPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message: "App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ImagePicker.launchCamera(
          {
            mediaType: "photo",
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            console.log(response);
            setResponseCamera(response);
            setResponseGallery(null);
          }
        );
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <View style={styles.View}>
        <TouchableOpacity onPress={() => openCameraWithPermission()}>
          {responseCamera === null ? (
            <Image style={styles.icon} source={cameraImage} />
          ) : (
            <Image style={styles.icon} source={{ uri: responseCamera.uri }} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: "photo",
                includeBase64: false,
                maxHeight: 250,
                maxWidth: 250,
              },
              (response) => {
                setResponseGallery(response);
                setResponseCamera(null);
              }
            )
          }
        >
          {responseGallery === null ? (
            <Image style={styles.icon} source={galleryImage} />
          ) : (
            <Image style={styles.icon} source={{ uri: responseGallery.uri }} />
          )}
        </TouchableOpacity>
      </View>
      <OtpButton />
    </>
  );
};

const styles = StyleSheet.create({
  View: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 4,
  },
  icon: {
    height: 80,
    width: 80,
    marginTop: 100,
  },
});

export default ImageePicker;
