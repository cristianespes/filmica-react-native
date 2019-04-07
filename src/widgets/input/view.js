import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';

class Input extends Component {
    render() {
        const {
            label,
            value,
            error,
            onChangeText,
            containerStyle,
            labelStyle,
            inputStyle,
            errorStyle,
            keyboardType,
            maxLength,
            multiline,
            numberOfLines,
            placeholder,
            placeholderTextColor,
            selectionColor
        } = this.props;
        return (
            <View style={[styles.container, containerStyle]}>
                { label ? <Text style={[styles.label, labelStyle]}>{ label }</Text> : null }
                <TextInput
                    style={[styles.input, inputStyle]}
                    onChangeText={ onChangeText }
                    value={ value }
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    underlineColorAndroid={'transparent'}
                    selectionColor={selectionColor}
                />
                {
                    error ? <Text style={[styles.error, errorStyle]}>{error}</Text> : null
                }
            </View>
        );
    }
}

Input.defaultProps = {
    label: '',
    value: '',
    error: '',
    onChangeText: () => {},
    containerStyle: {},
    labelStyle: {},
    inputStyle: {},
    errorStyle: {},
    keyboardType: 'default',
    maxLength: null,
    multiline: false,
    numberOfLines: null,
    placeholder: '',
    placeholderTextColor: 'rgba(255,255,255,0.4)',
    selectionColor: 'rgba(255,255,255,0.4)'
}

export default Input;
