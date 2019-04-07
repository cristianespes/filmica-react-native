import React, { Component } from 'react';
import { View, SafeAreaView, Text, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Actions } from "react-native-router-flux";

import styles from './styles';
import { Input, Button, FilmHeader } from '../../widgets'
import * as api from '../../webservice'

class RatingForm extends Component {
    state = { rating: '', ratingError: '' }

    render() {
        const { film } = this.props;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.container}>
                    <FilmHeader film={film} />
                    <View style={{ flex: 1 }}>
                        <Input
                            label={'Valoración:'}
                            onChangeText={ rating => this.setState({ rating })}
                            value={this.state.rating}
                            error={this.state.ratingError}
                            keyboardType={'decimal-pad'}
                        />
                        <Text style={styles.label}>El valor introducido debe estar comprendido entre 0.5 y 10</Text>
                    </View>

                    <Button
                        label={'Envíar'}
                        onPress={this._onSubmit}
                        buttonStyle={{ margin: 20 }}
                        isFetching={this.props.isFetching}
                    />
                </SafeAreaView>
            </TouchableWithoutFeedback>   
        );
    }

    _onSubmit = () => {
        const { rating } = this.state;
        if (!rating) {
            const ratingError = rating ? '' : "Campo obligatorio";
            this.setState({ ratingError });
            return
        }

        if (!parseFloat(rating)) {
            const ratingError = "Debe introducir un valor númerico";
            this.setState({ ratingError });
            return
        }

        if (rating < 0.5 || rating > 10.0) {
            const ratingError = "Valor fuera del rango de valoración";
            this.setState({ ratingError });
            return
        }
        
        this.setState({ ratingError: '' });

        api.postRatingFilm(this.props.film.id, { "value": parseFloat(rating).toFixed(1) })
        .then( res => {
            //console.log('postRatingFilm res: ', res)
            Alert.alert(
                'Calificación enviada',
                '¡Gracias por la valoración!',
                [
                    {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                    },
                    {text: 'Aceptar', onPress: () => Actions.pop()},
                ],
                {cancelable: false},
            );
        })
        .catch( err => {
            //console.log("postRatingFilm err: ", err);
            Alert.alert(
                'Error',
                'No ha sido posible valorar la película en TMDB',
                [
                    {text: 'Aceptar', onPress: () => {} },
                ],
                {cancelable: false},
            );
        });
    }
}

export default RatingForm;
