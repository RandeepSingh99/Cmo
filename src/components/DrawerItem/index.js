import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DrawerItem = () => {
  return (
    <TouchableOpacity
      style={styles.header}
      onPress={() => toggleSection(section.title)}>
      <Text style={styles.headerText}>{section.title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({});
