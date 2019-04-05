import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import * as colors from '../../commons/colors';

class TabIcon extends React.Component {
    render() {
        const { title, focused } = this.props;
        return (
            <View style={styles.container}>
            {
                title == 'Discover' &&
                <Image style={[styles.image, { tintColor: focused ? colors.white : colors.grayLight }]} source={require('../../commons/images/ic_movie.png')} />
            }
            {
                title == 'Favorites' &&
                <Image style={[styles.image, { tintColor: focused ? colors.white : colors.grayLight }]} source={require('../../commons/images/ic_star.png')} />
            }
            </View>
        )
        return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
        </View>
        );
    }
  }

  TabIcon.defaultProps = {
    title: ''
}

  export default TabIcon;
