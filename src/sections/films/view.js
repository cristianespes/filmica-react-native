import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import * as api from '../../webservice';

class Films extends Component {

    constructor(props) {
        super(props);

        this.state = { films: [] };

        this._fetchFilmsList();
    }

    render() {
        console.log("this.state.films: ", this.state.films);
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

    _fetchFilmsList() {
        api.fetchDiscoverFilms()
        .then( res => {
            this.setState({ films: res.data.results });
        })
        .catch( err => {
            console.log("fetchDiscoverFilms err: ", err);
            this.setState({ err: err });
        });
    }
}

export default Films;
