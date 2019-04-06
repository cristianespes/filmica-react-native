import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { FavCell } from '../../widgets';
import * as colors from '../../commons/colors';

const example = [{
    "vote_count": 1289,
    "id": 166428,
    "video": false,
    "vote_average": 7.7,
    "title": "How to Train Your Dragon: The Hidden World",
    "popularity": 424.866,
    "poster_path": "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    "original_language": "en",
    "original_title": "How to Train Your Dragon: The Hidden World",
    "genre_ids": [
    16,
    10751,
    12
    ],
    "backdrop_path": "/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg",
    "adult": false,
    "overview": "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    "release_date": "2019-01-03"
    },
    {
    "vote_count": 3406,
    "id": 299537,
    "video": false,
    "vote_average": 7.2,
    "title": "Captain Marvel",
    "popularity": 368.019,
    "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    "original_language": "en",
    "original_title": "Captain Marvel",
    "genre_ids": [
    28,
    12,
    878
    ],
    "backdrop_path": "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
    "adult": false,
    "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    "release_date": "2019-03-06"
    }]

class FavList extends Component {

    constructor(props) {
        super(props);

        //props.getFilmsList();
    }

    render() {
        console.log("this.props: ", this.props);
        //const { list, isFetching, page } = this.props;
        return (
            <View style={styles.container}>
                <FlatList 
                    style= {styles.list}
                    //extraData={this.state}
                    data={example}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    //ListFooterComponent={ this._renderFooter }
                    //ListEmptyComponent={ _ => this._renderNoResults(isFetching) }
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

    // _renderFooter = () => {
    //     const {isFetching, page} = this.props;

    //     if (!isFetching || page == 1) {
    //         return null;
    //     }

    //     return <ActivityIndicator
    //                 color={colors.accentColor}
    //                 size='large'
    //                 style={{margin: 20}}
    //             />;
    // }

    // _renderNoResults = isFetching => {
    //     return isFetching ? null : <Text style={styles.NoResults}>{'No hay películas disponibles'}</Text> 
    // }
}

export default FavList;
