//======================================================== React Native Import Files ==============================================================
import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"
//======================================================== Local Import Files ======================================================================

const Button = (props)=>{

    return (
        <TouchableOpacity
        onPress={props.onPress}
          style={styles.mainView}>
          <Text style={styles.textStyle}>
           {props.title}
          </Text>
        </TouchableOpacity>
    )
}

export default Button


const styles = StyleSheet.create({
mainView:{
    backgroundColor: '#3275BB',
    borderRadius: 2,
    height: hp(7),
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'center',
},
textStyle:{
    color: 'white', fontSize: 14, fontWeight: '400'
}
})