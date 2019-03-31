import { StyleSheet } from 'react-native';
import * as colors from '../../commons/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryColorLight
    },
    section: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 16
    },
    content: {
        fontSize: 16,
        color: 'white',
        marginHorizontal: 16,
        marginTop: 8
    }
});
