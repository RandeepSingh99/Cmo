import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scaledValue} from '../../utils/designUtils';
const OurGovtCard = props => {


  return (
    <TouchableOpacity onPress={props.onPress} style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={props.img} style={styles.icon} />
      </View>
      <Text  allowFontScaling={false}style={styles.cardText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default OurGovtCard;

const styles = StyleSheet.create({
  card: {
    width: scaledValue(145), // Adjust to fit 2 cards per row with some spacing
    height: scaledValue(145), // Adjust to fit 2 cards per row with some spacing
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    margin: scaledValue(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
});
