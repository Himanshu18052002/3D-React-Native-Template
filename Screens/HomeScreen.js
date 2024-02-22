import { Canvas } from "@react-three/fiber/native";
import React, { Suspense } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Model from "../Component/Model";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.topContainer, { backgroundColor: "lightgray" }]}>
        <Canvas>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.text}>Description</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7fb",
    paddingBottom: 5,
  },
  topContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  name: {
    fontSize: 35,
    fontWeight: "300",
  },
  price: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default HomeScreen;
