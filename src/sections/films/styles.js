import { StyleSheet } from 'react-native';
import * as colors from '../../commons/colors';

const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: colors.primaryColorLight
     },
     list: {
         padding: 4
     },
     NoResults: {
         color: colors.white,
         fontSize: 16,
         margin: 20,
         textAlign: 'center'
     }
});

export default styles;
