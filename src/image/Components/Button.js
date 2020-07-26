import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity 
          onPress={props.onPress}
          style={{ 
            backgroundColor: '#4495cb', 
            width: '90%', 
            height: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10
            }}>
            <Text style={{ 
                color: 'white', 
                fontWeight: 'bold', 
            fontSize: 18}}>{props.text}</Text>
          </TouchableOpacity>
);

export default Button;
