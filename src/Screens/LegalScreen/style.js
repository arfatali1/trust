//=============================================================== React Native Import Files ===============================================================
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp , widthPercentageToDP as wp} from "react-native-responsive-screen";
//=============================================================== Local Import Files ======================================================================

const styles = StyleSheet.create({

mainView:{
    backgroundColor: 'white', height: hp(100), width: wp(100)
},
headerView:{
    backgroundColor: '#3275BB',
    height: hp(10),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
},
headerText:{fontSize: 19, fontWeight: '400', color: 'white'},
descView:{
    height: hp(10),
    justifyContent: 'center',
    width: wp(75),
    right: 20,
    alignSelf: 'center',
},
descStyle:{
    fontSize: 12, fontWeight: '400', color: '#545454'
},
policyView:{
    height: hp(17),
    width: wp(90),
    alignSelf: 'center',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderRadius: 10,
},
policyRow:{
    height: hp(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    flexDirection: 'row',
}
,
policyText:{
    color: '#818181', fontSize: 16, fontWeight: '400'
},
separator:{
    backgroundColor: '#E7E7E7',
    height: hp(0.1),
    width: wp(78),
    alignSelf: 'center',
},
termsRow:{
    height: hp(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    flexDirection: 'row',
},
termsStyle:{
    color: '#818181', fontSize: 16, fontWeight: '400'
},
bottomView:{
    height: hp(50),
    width: wp(90),
    alignSelf: 'center',
    justifyContent: 'flex-end',
},
checkRow:{
    height: hp(7), alignItems: 'center', flexDirection: 'row'
},
checkBoxStyle:{
    
    height: hp(4),
    width: wp(7),

    borderRadius: 3,
    justifyContent:'center',
    alignItems:'center'
},
checkTextStyle:{
    width: wp(80),
    left: 10,
    color: '#3275BB',
    fontSize: 12,
    fontWeight: '400',
},
disableView:{
    backgroundColor: '#AAAAAA',
    borderRadius: 2,
    height: hp(7),
    width: wp(90),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    top:20
},
btnText:{
    color: 'white', fontSize: 14, fontWeight: '400'
},
btnView:{
    alignItems:'center',height:hp(10),justifyContent:'flex-end'
}




})

export default styles