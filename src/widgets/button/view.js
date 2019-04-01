import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

class Button extends Component {
    render() {
        const { buttonStyle, labelStyle, label, onPress } = this.props;
         return (
            <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
                <Text style={[styles.label, labelStyle]}>{ label.toUpperCase() }</Text>
            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
    label: '',
    onPress: () => {},
    buttonStyle: {},
    labelStyle: {}
}

export default Button;
