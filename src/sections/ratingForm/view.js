import React, { Component } from 'react';
import { View, SafeAreaView, Text, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Actions } from "react-native-router-flux";
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import { Input, Button, FilmHeader } from '../../widgets';
import * as api from '../../webservice';
import { GUEST_SESSION_ID } from '../../commons/constants';

class RatingForm extends Component {
    state = { rating: '', ratingError: '', attempts: 0 }

    render() {
        const { film } = this.props;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.container}>
                    <FilmHeader film={film} displayImage={false} />
                    <View style={{ flex: 1, marginTop: 20 }}>
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

    _onSubmit = async () => {
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

        if (rating.replace(",",".") < 0.5 || rating.replace(",",".") > 10.0) {
            const ratingError = "Valor fuera del rango de valoración";
            this.setState({ ratingError });
            return
        }
        
        this.setState({ ratingError: '' });

        try {
            const guestSession = await AsyncStorage.getItem(GUEST_SESSION_ID)
            const ratingFloat = parseFloat(rating.replace(",",".")).toFixed(1);
            
            if (guestSession !== null) {
                this._sendRatingFilm(this.props.film.id, ratingFloat, guestSession)
            } else {
                this._requestGuestSession(ratingFloat);
            }
        } catch(e) {
            console.log("error: ", e);
        }
    }

    _requestGuestSession = (rating) => {
        api.requestGuestSession()
        .then( res => {
            //console.log("_requestGuestSession res: ", res)
            if (res.data.success == true) {
                AsyncStorage.setItem(GUEST_SESSION_ID, res.data.guest_session_id);
                this._sendRatingFilm(this.props.film.id, rating, res.data.guest_session_id);
            }
        })
        .catch( err => {
            //console.log("_requestGuestSession err: ", err);
            this._errorMessage();
        });
    }

    _sendRatingFilm = (movieId, rating, guestSession) => {
        api.postRatingFilm(movieId, { "value": rating }, guestSession)
        .then( res => {
            //console.log('_sendRatingFilm res: ', res)
            Alert.alert(
                'Calificación enviada',
                '¡Gracias por enviarnos su valoración!',
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
            //console.log("_sendRatingFilm err: ", err);
            if (err.message.includes("401") && this.state.attempts <= 1) {
                const newAttempt = this.state.attempts + 1;
                this.setState({attempts: newAttempt})
                this._requestGuestSession(rating);
            } else {
                this._errorMessage();
            }
        });
    }

    _errorMessage = () => {
        Alert.alert(
            'Error',
            'Ha ocurrido un error durante la solicitud. Por favot, inténtelo más tarde.',
            [
                {text: 'Aceptar', onPress: () => {} },
            ],
            {cancelable: false},
        );
    }
}

export default RatingForm;
