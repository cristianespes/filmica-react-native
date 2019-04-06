import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { FavCell } from '../../widgets';

class FavList extends Component {

    constructor(props) {
        super(props);

        this.props.initFavoriteList()
    }

    render() {
        const { favList } = this.props;
        console.log("view favList: ", favList);
        console.log("view favList length: ", favList.length);
        return (
            <View style={styles.container}>
                <FlatList 
                    style= {styles.list}
                    //extraData={this.state}
                    data={favList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListEmptyComponent={this._renderNoResults}
                />
            </View>
        );
    }

    _keyExtractor = (item, index) => `${item.id}`;

    _renderItem = ({ item, index }) => (
        <FavCell film={item} onPress={film => this._onFilmTapped(film)} />
    );

    _onFilmTapped = film => {
        // this.props.updateFilmSelected(film)
        Actions.FilmDetail({ film, title: film.title });
    }

    _renderNoResults = () => {
        return <Text style={styles.NoResults}>{'No tiene películas favoritas todavía'}</Text> 
    }
}

export default FavList;
