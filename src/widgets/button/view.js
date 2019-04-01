import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';
import * as colors from '../../commons/colors';

class Button extends Component {
    render() {
        const { buttonStyle, onPress, isFetching } = this.props;
         return (
            <TouchableOpacity style={[styles.button, buttonStyle]} onPress={isFetching ? () => {} : onPress}>
                { this._renderContent() }
            </TouchableOpacity>
        );
    }

    _renderContent() {
        const { isFetching, labelStyle, label } = this.props;

        if (isFetching) {
            return (
                <Spinner
                    style={styles.spinner}
                    size={14}
                    type={'Circle'}
                    color={colors.accentColor}
                />
            )
        } else {
            return <Text style={[styles.label, labelStyle]}>{ label.toUpperCase() }</Text>
        }
    }
}

Button.defaultProps = {
    label: '',
    onPress: () => {},
    buttonStyle: {},
    labelStyle: {},
    isFetching: false
}

export default Button;
