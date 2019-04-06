import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, SafeAreaView, View } from 'react-native';

import styles from './styles';
import { BASE_URL_IMAGE } from '../../config/api'

class FilmCell extends Component {
    static defaultProps ={
        film: {},
        onPress: () => {}
    } 

    constructor(props) {
        super(props);
    }
    
    render() {
        const { film } = this.props;
        const source = film && film.poster_path ? { uri: `${BASE_URL_IMAGE}${film.poster_path}` } : null;
        //const source = { uri : `https://via.placeholder.com/150`};
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style = {styles.overlay} onPress={ _ => this._onCellTapped() } >
                    <Image style = {styles.poster} source = {source} />
                    <View style={styles.containerText}>
                        <Text style = {styles.title}>{film.title}</Text>
                        <Text style = {styles.description} numberOfLines={3}>{film.overview}</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    _onCellTapped = () => {
        const { film } = this.props;
        this.props.onPress(film);
    }
}

export default FilmCell;
