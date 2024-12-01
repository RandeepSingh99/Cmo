import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scaledValue } from '../../utils/designUtils'
import { Button } from '@react-navigation/elements'
import { screensEnabled } from 'react-native-screens'
import { appColors } from '../../utils/constants/colors'

const ContextHeader = () => {
    return (
        <View style={styles.contextHeader}>
            <View style={styles.contextText}>
                <Text style={styles.contextText}>Latest Event</Text>
            </View>
            <View style={styles.btnViewAll}>
                <Button title="View All"
                    style={styles.btnViewAllText}
                     color="transparent"
                />
            </View>
        </View>
    )
}

export default ContextHeader

const styles = StyleSheet.create({
    contextHeader: {
        height:scaledValue(70),
        flexDirection: 'row',
        alignItems:'center',        
        justifyContent: 'space-between',
        marginHorizontal: scaledValue(15),
       
    },
    contextText: {

        fontFamily: "Roboto",
        fontWeight: '800',
        color: appColors.darkBlue,
        fontSize: scaledValue(20),
        flexDirection: 'row',

    },
    btnViewAll: {
        width: scaledValue(89),
        height: scaledValue(33),
        borderWidth: 1,
        borderRadius: 8,
    },
    btnViewAllText: {
        height: scaledValue(),
        width: scaledValue(),
        color: appColors.darkBlue,
        fontSize: scaledValue(14),
        fontWeight: '600',
        justifyContent: 'center',
        fontFamily:'Inter',
        lineHeight:scaledValue(21)
    }
})