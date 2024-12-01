import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scaledValue } from '../../utils/designUtils';
import { appColors } from '../../utils/constants/colors';

const ClickBlueButton = () => {
  return (
    <View style={styles.contributionClickHereButton}>
        <Text style={styles.contributionClickHereButtonText}>Click Here</Text>
      </View>
  )
}

export default ClickBlueButton

const styles = StyleSheet.create({
    contributionClickHereButton: {
        height: scaledValue(49),
        width: scaledValue(192),
        backgroundColor: appColors.blue,
        borderRadius: 100,
        flexDirection:'row',
        justifyContent:"center",
       alignItems:'center'
      },
      contributionClickHereButtonText: {
        fontFamily: 'Inter',
        fontWeight: '600',
        color: appColors.white,
        fontSize: scaledValue(14),
      },
})