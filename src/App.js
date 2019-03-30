import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Stack, Router, Scene } from 'react-native-router-flux';

import { Films, FilmDetail } from './sections';
import { configureAxios } from './webservice';

export default class App extends Component {

  constructor(props) {
    super(props);

    configureAxios(); // Configuración inicial para la api
  }

  render() {
    return (
      <Router>
        <Stack key={'root'}>
          <Scene key={'Films'} component={Films} initial title={"Filmica"} />
          <Scene key={'FilmDetail'} component={FilmDetail} />
        </Stack>
      </Router>
    );
  }
}
