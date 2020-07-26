import React, { Component } from 'react';
import {
  View, Text, Image, SafeAreaView, Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Input from './src/image/Components/Input';
import Button from './src/image/Components/Button';

const { width } = Dimensions.get('window')


export default class App extends Component {

  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    
  }
  
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView contentContainerStyle={{ flex: 1 }}>

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
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}

          />

          <Input
            placeholder={'Password'}
            secureTextEntry
            keyboardType={'numeric'}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />

          
          
          <View style={{ 
            flexDirection: 'row', 
            width: '90%',
            marginBottom: 40,
            marginTop: 10,
            justifyContent: 'space-between'
            }}>

            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
              style={{ 
                width: 20, 
                height: 20, 
                borderWidth: 1,
                borderColor: 'gray',
                marginRight: 10,
              }} 
              
              />

              <Text>Hide Password</Text>

            </View>

          
            <TouchableOpacity>
            <Text style={[styles.blueText, { fontSize: 16, marginLeft: 15 }]}>Forgot Password</Text>

            </TouchableOpacity>
            

          </View>


          <Button
            text={'Login'}
            onPress={() => {
              console.log('State Değerleri ', this.state.username, ' ', this.state.password);
              
            }}
          />

          <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}>
            <View style={styles.line} />
            <Text style={{ fontSize: 20, color: 'gray', margin: 20,}}>OR</Text> 
            <View style={styles.line} />
          </View>

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

        </ScrollView>

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
  line: { width: '35%', height: 0.5, backgroundColor: 'gray'}

}