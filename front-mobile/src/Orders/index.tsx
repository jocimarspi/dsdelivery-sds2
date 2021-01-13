import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../Header";
import OrderCard from "../OrderCard";

export default function Orders() {  
  return (
    <>
      <Header />
      <ScrollView>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
