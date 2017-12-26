'use strict';

import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, iconName, iconSize, iconColor }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                underlineColorAndroid='transparent'
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
            <Icon name={iconName} size={iconSize || 40} color={ iconColor || "black"} />
        </View> 
    );
};

export { Input }