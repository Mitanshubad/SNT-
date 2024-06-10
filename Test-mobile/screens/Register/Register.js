import { Button, StyleSheet, View, Text, TextInput } from "react-native";
import { useState } from "react";
import { baseUrl } from "../../scripts/baseurl";

export default function Register({ navigation }) {
    const [fullname, setFullname] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        fetch(`${baseUrl}/n-employee/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: fullname,
                mobile: mobile,
                password: password,
            }),
        }).then(response => response.json())
            .then(json => {
                if (!isNaN(json.id)) {
                    navigation.navigate('Login');
                    return;
                }

                if (!json.message) {
                    alert('Wrong credentials!');
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View style={styles.screen}>
            {/* <Text>Fullname</Text>
            <TextInput
                editable
                numberOfLines={1}
                maxLength={255}
                style={styles.input}
                onChangeText={setFullname}
                keyboardType="text"
            />

            <Text>Mobile number</Text>
            <TextInput
                editable
                numberOfLines={1}
                maxLength={10}
                style={styles.input}
                onChangeText={setMobile}
                keyboardType="numeric"
            />

            <Text>Password</Text>
            <TextInput
                editable
                numberOfLines={1}
                maxLength={255}
                style={styles.input}
                onChangeText={setPassword}
                placeholder="Password"
            />

            */}
            {/* <Button title="Login" /> */}
            {/* <Text>&nbsp;</Text> */}
            <Button
                style={styles.secondaryButton}
                title="Register"
                onPress={() => { register() }}
            />
            {/* <Text>&nbsp;</Text>
            <Text
                style={styles.secondaryButton}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >Login</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 16,
        backgroundColor: '#fff',
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    // input: {
    //     height: '56px',
    //     width: '100%',
    //     border: '1px solid grey',
    //     marginTop: '8px',
    //     marginBottom: '16px',
    //     padding: '16px'
    // },
    // secondaryButton: {
    //     lineHeight: '35px',
    //     backgroundColor: '#0000000d',
    //     color: 'dodgerblue',
    //     fontSize: "14px",
    //     fontWeight: '500',
    //     textTransform: 'uppercase',
    //     textAlign: 'center',
    // }
});