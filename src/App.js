import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Stack, Router, Scene } from 'react-native-router-flux';

import { Films, FilmDetail } from './sections';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key={'root'}>
          <Scene key={'Films'} component={Films} initial />
          <Scene key={'FilmDetail'} component={FilmDetail} />
        </Stack>
      </Router>
    );
  }
}
