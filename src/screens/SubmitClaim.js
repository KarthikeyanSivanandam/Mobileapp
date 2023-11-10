import React, { useState } from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';
import Modal from "react-native-modal";
import { TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import popUpModel from './ModelPopUp';

const claims = ()=>{
    const [claim,setClaim] = useState("");
    const [amount,setAmount] = useState("");
    const [popupVisible,setpopupVisible]= useState(false);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isTextFocus, setIsTextFocus] = useState(false);
    const hideModal = () => setpopupVisible(() => !popupVisible);
    const clear= ()=>{
        setClaim("");
        setAmount("");    
        setValue(null);        
    }
    const submit=()=>{
            setpopupVisible(true);
    }
    const data = [
        { label: 'Cough', value: '1' },
        { label: 'Covid-19', value: '2' },
        { label: 'Delivery', value: '3' },
        { label: 'Hypertension', value: '4' },
        { label: 'Infectious Diseases', value: '5' },
        { label: 'IVF', value: '6' },
        { label: 'Yellow Fever', value: '7' },
        { label: 'Others', value: '8' },
      ];
       
      const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'orange' }]}>
              Treatment Name
            </Text>
          );
        }
        return null;
      };

return(
<View>
    <View>    
    <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'orange' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Treatment Name' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    </View>
    <View style={{margin:20, height:50, backgroundColor:'white'}}>        
        <TextInput placeholder='Enter Claim Amount $' value={amount} 
        onChangeText={(text)=> {setAmount(text)}} 
        onFocus={() => setIsTextFocus(true)}
        onBlur={() => setIsTextFocus(false)}
        style={{borderWidth:1,height:100, borderColor: isTextFocus?'orange':'grey'}}        
        />        
    </View>
    <View>
        <View style={{margin:10}}>
        <Button title="Clear" onPress={clear}/>
        </View>
    
    <View style={{margin:10}}>
    <Button title="Submit" onPress={submit}/>
    </View>
    
    </View>
    <View>
            <Modal isVisible={popupVisible}>
                <View style = {styles.modal}>
                    <Text style={{fontSize:26}}>Congrats! You have Submitted Your Claim Successfully for $ {amount}</Text>
                    <Button title="Ok" onPress={hideModal} />
                </View>
            </Modal>
        </View>
</View>

);
}

const styles = StyleSheet.create({
textInput:{
    margin:10,
    fontsizsetAmount:18,
    borderColor:'orange',
    borderWidth:2,
    fontSize:18
},
text:{height:100,borderWidth:1},
modal: {  
    justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : "white",   
    height: 200 ,  
    width: '80%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 40,  
    marginLeft: 40,       
     },
     container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

export default claims;