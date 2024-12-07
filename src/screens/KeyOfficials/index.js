import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {appColors} from '../../utils/constants/colors';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import Spacer from '../../components/Spacer';
import {appRoutes} from '../../utils/constants/routeNames';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDepartmentContactDetails} from '../../store/departmentContactSlice';

const KeyOfficials = () => {
  const {language} = useSelector(state => state.ui);
  const departmentContact = useSelector(
    state => state.departmentContactDetails.data,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDepartmentContactDetails());
  }, []);
  return (
    <View style={styles.keyOfficials}>
      <Header title={appRoutes.keyOfficials} />
      <Spacer height={12} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={departmentContact}
        renderItem={({item}) => (
          <InfoCard
            name={
              language === 'English'
                ? item.OfficerName
                : item.OfficerNameInHindi
            }
            designation={
              language === 'English'
                ? item.DesignationName
                : item.DesignationNameHindi
            }
            phnNumber={item.PhoneNo}
            email={item.Email}
          />
        )}
      />
      <Spacer height={12} />
    </View>
  );
};

export default KeyOfficials;

const styles = StyleSheet.create({
  keyOfficials: {flex: 1, backgroundColor: appColors.background},
});
