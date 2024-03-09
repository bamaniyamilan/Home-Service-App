import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../Utils/Colors'

export default function Login() {
    return (
        <View style={{ alignItems: 'center' }}>
            {/* <Text>Login Screen</Text> */}
            <Image source={require('./../../../assets/images/login.png')}
                style={styles.loginImage} />

            <View style={styles.subContainer}>
                <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign: 'center',marginTop : 20 }}>
                    Lets find
                    <Text style={{ fontWeight: 'bold' }}> Professional cleaning and Repair
                    </Text> services.
                </Text>

                <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 17, marginTop: 20 }}>
                    Best app to find services near you which deliver you a professional service.
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => console.log("Button Clicked")}>
                    <Text style={{ textAlign: 'center', fontSize:18, color:Colors.PRIMARY, fontWeight:'bold'}}> Lets Get Started!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 5,
        borderColor: Colors.BLACK,
        borderRadius: 20
    },
    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    button: {
        padding: 20,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 20
    }
})
