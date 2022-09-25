//=============================================== React Native Import Files ===============================================
import React,{useEffect} from 'react';
import { ImageBackground} from 'react-native';

import images from '../../assets/images';
import {CommonActions} from '@react-navigation/native';
//=============================================== Local Import Files ======================================================
import {ONBOARDING_SCREEN} from '../../constants/navigation'
import styles from './style';
const SplashScreen = (props) => {

 useEffect(()=>{
timeOutFunction()
 },[])
 const timeOutFunction = async () => {
    setTimeout(() => {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
             name: ONBOARDING_SCREEN
            },
          ],
        }),
      );
    }, 1000);
  };



  return (
    <ImageBackground
      source={images.splashScreen}
      style={styles.mainView}></ImageBackground>
  );
};

export default SplashScreen;
