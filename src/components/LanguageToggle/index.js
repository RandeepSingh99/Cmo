import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from '../../store/uiSlice';
import {appColors} from '../../utils/constants/colors';
import {scaledValue} from '../../utils/designUtils';

const LanguageToggle = () => {
  const {language} = useSelector(state => state.ui);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, language === 'Hindi' && styles.selectedOption]}
        onPress={() => dispatch(setLanguage('Hindi'))}>
        <Text
          style={[styles.text, language === 'Hindi' && styles.selectedText]}>
          हिंदी
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, language === 'English' && styles.selectedOption]}
        onPress={() => dispatch(setLanguage('English'))}>
        <Text
          style={[styles.text, language === 'English' && styles.selectedText]}>
          English
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: appColors.background,
    borderRadius: scaledValue(8),
    width: scaledValue(124),
    height: scaledValue(28),
    padding: scaledValue(2),
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scaledValue(60),
    height: scaledValue(24),
    borderRadius: scaledValue(8),
  },
  selectedOption: {
    backgroundColor: appColors.darkBlue, // Highlighted color
  },
  text: {
    fontSize: scaledValue(12),
    fontWeight: '600',
    color: appColors.black, // Default text color
  },
  selectedText: {
    color: appColors.background, // Highlighted text color
  },
});

export default LanguageToggle;
