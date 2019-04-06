import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import * as colors from '../../commons/colors';

const styles = StyleSheet.create({
     cell: {
         width: '50%',
         height: width / 1.4,
         padding: 4,
         shadowColor: colors.black,
         shadowOffset: { width: 0, height: 2},
         //shadowOpacity: 0.8,
         elevation: 5
     },
     image: {
         borderRadius: 4,
         width: '100%',
         height: '100%',
         resizeMode: 'cover'
     }
});

export default styles;