import react from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { Modal } from 'react-native-paper';

const popUpModel =()=>{

    return(
        <View>
            <Modal transparent={true}>
                <View>
                    <Text>Pop up Model</Text>
                </View>
            </Modal>
        </View>
    );
}


const style = StyleSheet.create({

});

export default popUpModel;