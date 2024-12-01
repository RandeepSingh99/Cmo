import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const DrawerItem = () => {
  return (
    <TouchableOpacity style={styles.itemView} onPress={() => {}}>
      <Text style={styles.itemText}>Title</Text>
      {/* <Image/> */}
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  itemView: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    flexDirection:'row',
    backgroundColor:'red'
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
