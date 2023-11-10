import react, { useState } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons,Ionicons,Feather,FontAwesome } from '@expo/vector-icons';

const profile = ()=>
{
    const [email,setEmail] = useState("Karthik@gmail.com");
    const [phone,setPhone] = useState("9962964559");    
    const [dob,setDob] = useState("07/Feb/1990");
    const [address,setAddress] = useState("My address");
    const [emailEditable,setEmailEditable] = useState(false);
    const [phoneEditable,setPhoneEditable] = useState(false);
    const [dobEditable,setDobEditable] = useState(false);
    const [addressEditable,setAdressEditable] = useState(false);
    const color = 'orange'
    const editEmail =()=>{
        setEmailEditable(true);
    }
    const editPhone =()=>{
        setPhoneEditable(true);
    }
    const editDob =()=>{
        setDobEditable(true);
    }
    const editAddress =()=>{
        setAdressEditable(true);
    }
return (
    <View>
       <View> 

        </View>
        <View style={styles.searchSection}>
        <TextInput 
        style={{  flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        borderWidth:1,
        borderRadius:10,
        borderColor: emailEditable?'orange':'white',
        color: '#424242',
        }} 
        value={email} editable={emailEditable} onChangeText={(text)=> {setEmail(text)}} ></TextInput>
        <Feather style={styles.searchIcon} name="edit-2" size={26} color={color} onPress={editEmail}/>
        </View>
        
        <View style={styles.searchSection}>
        <TextInput 
         style={{  flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            borderWidth:1,
            borderRadius:10,
            borderColor: phoneEditable?'orange':'white',
            color: '#424242',
            }}  value={phone} editable={phoneEditable} onChangeText={(text)=> {setPhone(text)}}></TextInput>
        <Feather style={styles.searchIcon} name="edit-2" size={26} color={color} onPress={editPhone}/>
        </View>
        
        <View style={styles.searchSection}>
            <TextInput 
             style={{  flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 0,
                borderWidth:1,
                borderRadius:10,
                borderColor: dobEditable?'orange':'white',
                color: '#424242',
                }} 
            value={dob} editable={dobEditable} onChangeText={(text)=> {setDob(text)}}></TextInput>
            <Feather style={styles.searchIcon} name="edit-2" size={26} color={color} onPress={editDob}/>
        </View>
        
        <View style={styles.searchSection}>
        <TextInput 
         style={{  flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            borderWidth:1,
            borderRadius:10,
            borderColor: addressEditable?'orange':'white',
            color: '#424242',
            }} value={address} editable={addressEditable} onChangeText={(text)=> {setAddress(text)}}></TextInput>
        <Feather style={styles.searchIcon} name="edit-2" size={26} color={color} onPress={editAddress} />
        </View>
    </View>
);
}


const styles = StyleSheet.create({
    viewstyle:{margin:10},
    text:{height:50, borderWidth:1,borderColor:'white'},
    searchSection: {
        margin:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    orangebackground:{borderColor:'orange'},
    whitebackground:{borderColor:'white'}
});
export default profile;