'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createIconSetFromFontello } from 'react-native-vector-icons';
// import fontelloConfig from '../../../../assets/icon-set-food/config.json';
// const Icon = createIconSetFromFontello(fontelloConfig);

const Button = ({ onPress, children, iconName, iconSize, iconColor, title }) => {
    
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle} >
            <Icon name={iconName} size={iconSize || 80} color={ iconColor || "black"} />
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export { Button };