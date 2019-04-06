import { StyleSheet } from 'react-native';
import * as colors from '../../commons/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryColorLight
    },
    label: {
        marginBottom: 10,
        color: colors.white,
        marginHorizontal: 20,
        marginTop: 20
    }
});