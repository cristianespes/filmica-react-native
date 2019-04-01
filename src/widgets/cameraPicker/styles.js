import { StyleSheet } from 'react-native';
import * as colors from '../../commons/colors';

const styles = StyleSheet.create({
     container: {
        height: 200,
        backgroundColor: colors.gray,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
     },
     labelContainer: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.4)'
     },
     label: {
         color: colors.white
     },
     image: {
         position: 'absolute',
         top: 0,
         bottom: 0,
         left: 0,
         right: 0,
         borderRadius: 4,
         resizeMode: 'cover'
     }
});

export default styles;
