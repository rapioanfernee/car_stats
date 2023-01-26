import { useState } from "react";
import { Modal, View, Text, StyleSheet, Image } from "react-native";
import config1 from "../colors";
import Button from "../components/Button";
import Form from "../components/Form";
import carDetailsValidationSchema from "../components/formSchemas/carDetailsValidationSchema";
import Header from "../components/Header";

const CarDetails = ({ open, setOpen }) => {
  const [submitError, setSubmitError] = useState("");

  const fields = [
    {
      defaultValue: "",
      id: `car-make-${Math.random(100)}`,
      keyboardType: "default",
      label: "Make",
      name: "make",
      placeHolder: "",
      required: true,
    },
    {
      defaultValue: "",
      id: `car-model-${Math.random(100)}`,
      keyboardType: "default",
      label: "Model",
      name: "model",
      placeHolder: "",
      required: true,
    },
    {
      defaultValue: "",
      id: `car-year-${Math.random(100)}-1`,
      keyboardType: "number-pad",
      label: "Year",
      name: "year",
      placeHolder: "0",
      required: true,
    },
    {
      defaultValue: "",
      id: `car-displacement-${Math.random(100)}-1`,
      keyboardType: "number-pad",
      label: "Displacement (cc)",
      name: "displacement",
      placeHolder: '"ex: 1800"',
      required: false,
    },
    {
      defaultValue: "",
      id: `car-variant-${Math.random(100)}-1`,
      keyboardType: "default",
      label: "Variant",
      name: "variant",
      placeHolder: "ex: GR-S, RS",
      required: false,
    },
    {
      defaultValue: "",
      id: `car-variant-${Math.random(100)}-1`,
      keyboardType: "default",
      label: "Transmission",
      name: "transmission",
      placeHolder: "ex: MT, AT, CVT, DCT",
      required: false,
    },
  ];

  const handleFormSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.dashboardContainer}>
        <Header
          title="Car Details"
          actionIcon={
            <Image
              style={{
                height: 18,
                width: 18,
              }}
              source={require("../assets/images/close-icon.png")}
            />
          }
          actionIconOnPress={() => setOpen(false)}
        />
      </View>
      <Form
        fields={fields}
        handleFormSubmit={handleFormSubmit}
        validationSchema={carDetailsValidationSchema}
        actionButton={(handleSubmit, reset) => (
          <>
            {submitError ? (
              <View>
                <Text style={styles.errorMessage}>{submitError}</Text>
              </View>
            ) : (
              <View />
            )}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: "30%" }}>
                <Button
                  text="Submit"
                  textColor={config1.text2}
                  buttonStyle={styles.buttonSubmitStyle}
                  onButtonPress={handleSubmit(handleFormSubmit)}
                />
              </View>
              <View style={{ width: "30%", marginHorizontal: 16 }}>
                <Button
                  text="Clear"
                  textColor={config1.text1}
                  buttonStyle={styles.buttonClearStyle}
                  onButtonPress={() => {
                    setSubmitError("");
                    reset();
                  }}
                />
              </View>
            </View>
          </>
        )}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    padding: 32,
  },
  buttonSubmitStyle: {
    border: 1,
    borderRadius: 8,
    backgroundColor: config1.red,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonClearStyle: {
    border: 1,
    borderRadius: 8,
    backgroundColor: config1.panel2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  errorMessage: {
    color: config1.red,
    marginBottom: 16,
  },
});

export default CarDetails;
