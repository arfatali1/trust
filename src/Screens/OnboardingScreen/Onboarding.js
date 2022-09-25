//===================================================== React Native Import Files ===================================================
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
//===================================================== Local Import Files ==========================================================
import OnBoardingIcon from '../../assets/onboarding_icon.svg';

import images from '../../assets/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LEGAL_SCREEN} from '../../constants/navigation'
import styles from './style';
import Button from '../../components/Button';
const OnBoarding = (props) => {
  const [boarding, setBoarding] = useState(0);
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  const swipeLeft = () => {
    if (boarding === 1) {
    } else {
      setBoarding(boarding + 1);
    }
  };
  const swipeRight = () => {
    if (boarding === 0) {
    } else {
      setBoarding(boarding - 1);
    }
  };
  return (
    <GestureRecognizer
      onSwipeLeft={() => swipeLeft()}
      config={config}
      onSwipeRight={() => swipeRight()}>
      <View
        style={styles.mainView}>
        {boarding === 0 ? (
          <View
            style={styles.boardingMainView}>
            <View
              style={styles.boardingIconView}>
              <OnBoardingIcon
                height={heightPercentageToDP(40)}
                width={widthPercentageToDP(40)}
              />
              <Text style={styles.boardingTitleStyle}>
                Safe and Secure
              </Text>
              <Text
                style={styles.boardingDescStyle}>
                Your private keys never share outside this device.
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={styles.boarding2MainView}>
            <View
              style={styles.boarding2InsideView}>
              <Image
                source={images.onBoarding}
                style={styles.imageStyle}
                resizeMode={'contain'}
              />

              <View style={{alignItems: 'center'}}>
                <Text
                  style={styles.boarding2TitleStyle}>
                  One Wallet, All Assets
                </Text>
                <Text
                  style={styles.boarding2DescStyle}>
                  All your assets in one place.
                </Text>
              </View>
            </View>
          </View>
        )}

        <View
          style={styles.dotsView}>
          <View
            style={styles.dotInsideView}>

            <View
              style={[styles.firstDotView,{backgroundColor: boarding === 0 ? '#2C78C8' : '#D9D9D9',}]}></View>
            <View
        
        style={[styles.secondDotView,{ backgroundColor: boarding === 1 ? '#2C78C8' : '#D9D9D9',}]}></View>
          </View>
        </View>
        <View
          style={styles.btnView}>
        <Button onPress={()=> props.navigation.navigate(LEGAL_SCREEN)} title={'NEW WALLET'}/>
        </View>
        <TouchableOpacity
          style={styles.alreadyWalletView}>
            <Text style={styles.walletTextSTyle}>Already have a wallet?</Text>
          </TouchableOpacity>
      </View>
    </GestureRecognizer>
  );
};
export default OnBoarding;
