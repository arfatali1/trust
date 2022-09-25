//========================================================= React Native Import Files =======================================================
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
//========================================================= Local Import Files ==============================================================

const styles = StyleSheet.create({
mainView:{
    height: hp(100),
    width: wp(100),
    backgroundColor: 'white',
},
boardingMainView:{
    height: hp(65),
    width: wp(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
},
boardingIconView:{
    height: hp(60),
                width: wp(70),
                justifyContent: 'center',
                alignItems: 'center',
},
boardingTitleStyle:
    {color: '#000000', fontWeight: '400', fontSize: 27},
    boardingDescStyle:{
        textAlign: 'center',
        color: '#828282',
        fontSize: 15.5,
        fontWeight: '400',
        top: 10,
    },
    boarding2MainView:{
        height: hp(65),
        width: wp(100),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    boarding2InsideView:{
        height: hp(50),
        width: wp(70),

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageStyle:{
        height: hp(32),
        width: wp(63),
    },
    boarding2TitleStyle:{
        color: '#000000', fontWeight: '400', fontSize: 27
    },
    boarding2DescStyle:{
        textAlign: 'center',
        color: '#828282',
        fontSize: 15.5,
        fontWeight: '400',
        top: 10,
    },
    dotsView:{
        height: hp(15),
            width: wp(100),
            justifyContent: 'flex-end',
            alignItems: 'center',
    },
    dotInsideView:{
        height: hp(3),
        width: wp(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    firstDotView:{
        
        height: hp(2),
        width: hp(2),
        borderRadius: hp(2),
    },
    secondDotView:{
        height: hp(2),
        width: hp(2),
        borderRadius: hp(2),
    },
    btnView:{
        height: hp(12),
        width: wp(100),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    alreadyWalletView:{
        height: hp(7),
        width: wp(100),
        alignItems:'center',
        justifyContent:'center'
    },
    walletTextSTyle:{
        color:'#507499',fontWeight:'400' ,fontSize:14
    }
})
export default styles