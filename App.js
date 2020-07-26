import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, TextInput } from 'react-native';
import Input from './src/image/Components/Input';


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        {/* Logo Image */}
        <View style={[styles.subContainer, { flex: 2 }]}>

          <Image
            source={require('./src/image/logo.png')}
            style={styles.logo}
          />

        </View>



        {/* Form */}
        <View style={[styles.subContainer, { flex: 3 }]}>

          <Input
            placeholder={'Phone number, username or email'}
          />

          <Input
            placeholder={'Password'}
            secureTextEntry
          />



        </View>



        {/* Login With Facebook */}
        <View style={[styles.subContainer, { flex: 1.5, flexDirection: 'row' }]}>

          <Image
            source={require('./src/image/facebook.png')}
            style={styles.facebook}
          />
          <Text style={[styles.blueText, { fontSize: 20, marginLeft: 15 }]}>Log In with Facebook</Text>


        </View>



        {/* Bottom */}
        <View style={[styles.subContainer, { flex: 0.5, borderTopWidth: 0.5, borderTopColor: 'gray' }]}>

          <Text style={styles.mainText}>
            Don't have an account?
            <Text style={styles.blueText}>  Sign Up</Text>
          </Text>
        </View>

      </SafeAreaView>
    )
  }

}

const styles = {
  mainText: { color: 'gray' },
  blueText: { color: '#4495cb', fontWeight: 'bold' },
  subContainer: { alignItems: 'center', justifyContent: 'center', },
  logo: { width: 200, height: 100, },
  facebook: { width: 30, height: 30 },

}