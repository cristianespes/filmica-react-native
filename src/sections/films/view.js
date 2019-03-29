import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

class Films extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={_ => Actions.FilmDetail({ title: 'Detalle', data: { filmName: 'Película' } })}
                >
                    <Text>Ir a segunda página</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Films;
