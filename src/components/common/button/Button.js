'use strict';

import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Button = ({ onPress, children, imagePath }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Image source={imagePath}/>
        </TouchableOpacity>
    )
}

export { Button };