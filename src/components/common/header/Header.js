'use strict';

import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const Header = ({ headerText, home }) => {
    const { textStyle, viewStyle } = styles;

    const goToHome = () => {
        if(home){
            return (
                <TouchableWithoutFeedback onPress={() => Actions.main()} >
                    <View>
                        <Text style={textStyle}>{headerText}</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
       } else {
            return (
                <Text style={textStyle}>{headerText}</Text>
            )
        }
    }

    return (
        <View style={viewStyle}>
            {goToHome()}
        </View>
    )
};


export { Header }; 