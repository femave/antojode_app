'use strict';

import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Button = ({ onPress, children, image }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Image source={image}/>
        </TouchableOpacity>
    )
}

export { Button };