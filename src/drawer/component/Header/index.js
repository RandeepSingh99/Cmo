import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { memo } from 'react';
  import { appColors } from '../../../utils/constants/colors';
  import bgLinear from '../../../../assets/images/bgLinear.png';
  import share from '../../../../assets/images/share.png';
  import logo from '../../../../assets/images/logo.png';
  import xCircle from '../../../../assets/images/xCircle.png';
  import { scaledValue } from '../../../utils/designUtils';
  
  const Header = (props) => {
    return (
      <ImageBackground style={styles.drawerHeader} source={bgLinear}>
        <Image tintColor={appColors.white} style={styles.logo} source={logo} />
        <TouchableOpacity style={styles.crossTouchable} onPress={props.onPress}>
          <Image resizeMode="contain" style={styles.cross} source={xCircle} />
        </TouchableOpacity>
        <View>
          <View style={styles.titleView}>
            <Text style={styles.title}>CMO Rajasthan</Text>
            <Image
              resizeMode="contain"
              tintColor={appColors.white}
              style={styles.share}
              source={share}
            />
          </View>
          <Text style={styles.lastAppUpdateTime}>
             Last update : 04-Aug-2024, 9:31 PM
          </Text>
        </View>
      </ImageBackground>
    );
  };
  
  export default memo(Header);
  
  const styles = StyleSheet.create({
    drawerHeader: {
      width: scaledValue(351),
      height: scaledValue(148),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    logo: {
      width: scaledValue(40),
      height: scaledValue(62),
      marginRight: scaledValue(12),
    },
    crossTouchable: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 99,
      width: scaledValue(50),
      height: scaledValue(50),
      justifyContent: 'center',
      alignItems: 'center',
    },
    cross: {
      width: scaledValue(32),
      height: scaledValue(32),
    },
    titleView: { flexDirection: 'row' },
    share: { width: scaledValue(20), height: scaledValue(20) },
    title: {
      color: appColors.white,
      fontSize: scaledValue(16),
      fontWeight: '800',
      marginRight: scaledValue(6),
    },
    lastAppUpdateTime: {
      color: appColors.white,
      fontSize: scaledValue(12),
      fontWeight: '400',
      marginTop: scaledValue(4),
    },
  });
  