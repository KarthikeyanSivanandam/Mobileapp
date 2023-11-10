import react from 'react'
import {View,Text,StyleSheet} from 'react-native'

const cards = ()=>
{
return (

    <View>

        <View style={styles.cardStyle}>
            <Text style={styles.textStyle}>Available Credit Limit</Text>
        </View>
    </View>
);

}

const styles = StyleSheet.create({
    cardStyle:{backgroundColor:'blue',height:200,width:390,margin:20,borderRadius:20},
    textStyle:{color:'white'}
});

export default cards;