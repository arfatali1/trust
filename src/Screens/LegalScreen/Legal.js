//====================================================== React Native Import Files ==========================================================
import React,{useState} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

//====================================================== Local Import Files =================================================================
import RightArrow from '../../assets/rightarrow.svg';
import Tick from '../../assets/tick.svg'
import styles from './style';
import Button from '../../components/Button'
const LegalScreen = () => {
    const [check,setCheck] = useState(false)
  return (
    <View style={styles.mainView}>
      <View
        style={styles.headerView}>
        <Text style={styles.headerText}>
          Legal
        </Text>
      </View>
      <View
        style={styles.descView}>
        <Text style={styles.descStyle}>
          Please review the Trust Plus Wallet Terms of Service and Privacy
          Policy.
        </Text>
      </View>
      <View
        style={styles.policyView}>
        <View
          style={styles.policyRow}>
          <Text style={styles.policyText}>
            Privacy Policy
          </Text>
          <RightArrow height={20} width={20} />
        </View>
        <View
          style={styles.separator}></View>
        <View
          style={styles.termsRow}>
          <Text style={styles.termsStyle}>
            Terms of Service
          </Text>
          <RightArrow height={20} width={20} />
        </View>
      </View>
      <View
        style={styles.bottomView}>
        <View
          style={styles.checkRow}>
          <TouchableOpacity
 onPress={()=> setCheck(!check)}
            style={[styles.checkBoxStyle,{backgroundColor:check === false? null  :  '#3275BB',    borderColor:check === false ? '#E7E7E7': null,
            borderWidth:check === true  ? 0:1,}]}>
            {check === true ?<Tick height={25} width={25}/> : null}    
            </TouchableOpacity>
          <Text
            style={styles.checkTextStyle}>
            I’ve read and accept the Terms of Service and Privacy Policy.
          </Text>
        </View>
      </View>
      {check === true ?
      <View style={styles.btnView}>
      <Button title={'Continue'}/>
        </View>
 :
          <View
            
          style={styles.disableView}>
          <Text style={styles.btnText}>
            Continue
          </Text>
        </View>
          
          }
      
    </View>
  );
};

export default LegalScreen;
