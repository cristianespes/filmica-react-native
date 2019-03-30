import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

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
        return (
            <TouchableOpacity style={styles.cell} onPress={ _ => this._onCellTapped() } >
                <Image style={styles.image} source={source}/>
            </TouchableOpacity>
        );
    }

    _onCellTapped = () => {
        const { film } = this.props;
        this.props.onPress(film);
    }
}

export default FilmCell;