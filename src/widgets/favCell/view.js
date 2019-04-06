import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, SafeAreaView, View } from 'react-native';

import styles from './styles';
import { BASE_URL_IMAGE } from '../../config/api'

class FilmCell extends Component {
    static defaultProps ={
        // TODO: DESCOMENTAR
        // film: {},
        // onPress: () => {}
        film: 'patata'
    } 

    constructor(props) {
        super(props);
    }
    
    render() {
        const { film } = this.props;
        //const source = film && film.poster_path ? { uri: `${BASE_URL_IMAGE}${film.poster_path}` } : null;
        const source = { uri : `https://via.placeholder.com/150`};
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style = {styles.overlay}>
                    <Image style = {styles.poster} source = {source} />
                    <View style={styles.containerText}>
                        <Text style = {styles.title}>{film}</Text>
                        <Text style = {styles.description} numberOfLines={3}>{'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'}</Text>
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
