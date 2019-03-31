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
        console.log("this.props: ", this.props);
        const { list, isFetching } = this.props;
        return (
            <View style={styles.container}>
                <FlatList 
                    style= {styles.list}
                    //extraData={this.state}
                    data={list}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={2}
                    ListFooterComponent={ _ => this._renderFooter(isFetching) }
                    ListEmptyComponent={ _ => this._renderNoResults(isFetching) }
                    refreshControl={
                        <RefreshControl
                            onRefresh={this.props.getFilmsList}
                            refreshing={isFetching}
                            tintColor={colors.accentColor}
                            colors={[colors.accentColor]}
                        />
                    }
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

    _renderFooter = (isFetching) => {
        if (!isFetching) {
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
}

export default Films;
