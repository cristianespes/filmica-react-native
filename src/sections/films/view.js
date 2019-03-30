import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import * as api from '../../webservice';
import { FilmCell } from '../../widgets';

class Films extends Component {

    constructor(props) {
        super(props);

        this.state = { films: [] };

        this._fetchFilmsList();
    }

    render() {
        console.log("this.state.films: ", this.state.films);
        const { films } = this.state;
        return (
            <View style={styles.container}>
                <FlatList 
                    //extraData={this.state}
                    data={films}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={2}
                />
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

    _keyExtractor = (item, index) => `${item.id}`;

    _renderItem = ({ item, index }) => (
        // onPress={this._onFilmTapped}
        <FilmCell film={item} onPress={film => this._onFilmTapped(film)} />
    );

    _onFilmTapped = film => {
        Actions.FilmDetail({ film, title: film.title });
    }
}

export default Films;
