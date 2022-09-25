import React from "react";
import { LEGAL_SCREEN, ONBOARDING_SCREEN, SPLASH_SCREEN } from "./constants/navigation";
import SplashScreen from '../src/Screens/SplashScreen/Splash'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from "./Screens/OnboardingScreen/Onboarding";
import LegalScreen from "./Screens/LegalScreen/Legal";
const RootStack = createStackNavigator();
const Stack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={SPLASH_SCREEN}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <RootStack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <RootStack.Screen name={ONBOARDING_SCREEN} component={OnBoarding} />
        <RootStack.Screen name={LEGAL_SCREEN} component={LegalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default Stack;
