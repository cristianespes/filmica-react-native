import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import * as colors from '../../commons/colors';

const styles = StyleSheet.create({
     cell: {
        width: '50%',
        height: width / 1.4
     },
     image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
     }
});

export default styles;