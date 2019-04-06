import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { FavCell } from '../../widgets';
import * as colors from '../../commons/colors';

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
                    data={['Carlos', 'Marta', 'Sebas']}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    //numColumns={2}
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
        alert(`Has pulsado ${film}`);
        // this.props.updateFilmSelected(film)
        // Actions.FilmDetail({ film, title: film.title });
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
