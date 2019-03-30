import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class FilmDetail extends Component {
    static defaultProps = {
        data: {}
    };

    render() {
        const { data: { filmName } } = this.props;
        return (
            <View style={styles.container}>
                <Text>{ filmName }</Text>
            </View>
        );
    }
}

export default FilmDetail;
