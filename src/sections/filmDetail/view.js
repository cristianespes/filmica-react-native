import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class FilmDetail extends Component {
    static defaultProps = {
        film: {}
    };

    render() {
        const { film } = this.props;
        return (
            <View style={styles.container}>
                <Text>{ film.title }</Text>
            </View>
        );
    }
}

export default FilmDetail;
