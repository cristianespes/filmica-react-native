import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { FilmCell } from '../../widgets';
import * as colors from '../../commons/colors';

class Films extends Component {

    constructor(props) {
        super(props);

        props.getFilmsList();
    }

    render() {
        //console.log("this.props: ", this.props);
        const { list, isFetching, page } = this.props;
        return (
            <View style={styles.container}>
                <FlatList 
                    style= {styles.list}
                    //extraData={this.state}
                    data={list}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={2}
                    ListFooterComponent={ this._renderFooter }
                    ListEmptyComponent={ _ => this._renderNoResults(isFetching) }
                    refreshControl={
                        <RefreshControl
                            onRefresh={this.props.getFilmsList}
                            refreshing={isFetching}
                            tintColor={colors.accentColor}
                            colors={[colors.accentColor]}
                        />
                    }
                    onEndReachedThreshold={0.9}
                    onEndReached={this._onEndReached}
                />
            </View>
        );
    }

    _keyExtractor = (item, index) => `${item.id}`;

    _renderItem = ({ item, index }) => (
        <FilmCell film={item} onPress={film => this._onFilmTapped(film)} />
    );

    _onFilmTapped = film => {
        this.props.updateFilmSelected(film)
        Actions.FilmDetail({ film, title: film.title });
    }

    _renderFooter = () => {
        const {isFetching, page} = this.props;

        if (!isFetching || page == 1) {
            return null;
        }

        return <ActivityIndicator
                    color={colors.accentColor}
                    size='large'
                    style={{margin: 20}}
                />;
    }

    _renderNoResults = isFetching => {
        return isFetching ? null : <Text style={styles.NoResults}>{'No hay películas disponibles'}</Text> 
    }

    _onEndReached = ({ distanceFromEnd }) => {
        const {list, isFetching, page, total} = this.props;
        if (list.length && !isFetching && page < total) {
            this.props.updateFilmsListOffset()
        }
    }
}

export default Films;
