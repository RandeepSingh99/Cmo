import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scaledValue } from '../../utils/designUtils'
import contextImg from '../../../assets/images/contextImg.png'
import calenderIcon from '../../../assets/images/calenderIcon.png'
import { appColors } from '../../utils/constants/colors'

const ContextCart = () => {
    return (
        <View style={styles.contextCart}>
            <Image resizeMode="cover" style={styles.contextImg} source={contextImg} />
            <View style={styles.outercontextCartText}>
                <Text style={styles.contextCartText}>बजट घोषणाओं के लिए इलेक्ट्रोपैथी चिकित्सकों द्वारा आभार एवं अभिनंदन......</Text>
            </View>
            <View style={styles.contextCartCalenederDate}>
                <Image resizeMode="contain" style={styles.contextCartcalenderIcon} source={calenderIcon} />
                <Text style={styles.contextCartDate}>6 Aug 2024</Text>
            </View>
        </View>
    )
}

export default ContextCart

const styles = StyleSheet.create({
    contextCart: {
        height: scaledValue(219),
        width: scaledValue(200),
        borderWidth: 0.5,
        padding: scaledValue(10),
        borderRadius: scaledValue(4)
    },
    contextImg: {
        height: scaledValue(100),
        width: scaledValue(180),
        borderRadius: scaledValue(4)
    },
    outercontextCartText: {
        height: scaledValue(70),
        width: scaledValue(181),
        padding: scaledValue(5),
    },
    contextCartText: {
        fontFamily: 'Mukta',
        fontWeight: '700',
        fontSize: scaledValue(14),
        lineHeight: scaledValue(20),

    },
    contextCartCalenederDate:{
        flexDirection:'row',
        alignItems:'center',
        height:scaledValue(30)

    },
    contextCartcalenderIcon:{
        height:scaledValue(15),
        width:scaledValue(15),
        margin: scaledValue(5),
       color: appColors.gray,
    },
    contextCartDate:{
        height:scaledValue(20),
        width:scaledValue(151.04),
        alignItems:'center',
        fontFamily: 'Roboto',
        fontWeight:"400",
        fontSize:scaledValue(12)
    },

})