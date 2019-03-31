import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, SafeAreaView } from 'react-native';

import styles from './styles';
import { Input } from '../../widgets'

class FilmAdd extends Component {

    constructor(props) {
        super(props);

        this.state = { title: '', overview: '', poster: null, release: '' }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Input
                    label={'Título:'}
                    onChangeText={ title => this.setState({ title })}
                    value={this.state.title}
                />

                <Input
                    label={'Sinópsis:'}
                    onChangeText={ overview => this.setState({ overview })}
                    value={this.state.overview}
                />

                <Input
                    label={'Estreno:'}
                    onChangeText={ release => this.setState({ release })}
                    value={this.state.release}
                    placeholder={'yyyy/MM/dd'}
                />
            </SafeAreaView>
        );
    }
}

export default FilmAdd;
