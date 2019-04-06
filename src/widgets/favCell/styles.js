import { StyleSheet } from 'react-native';
import * as colors from '../../commons/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        marginBottom: 8,
        justifyContent: 'center',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2},
        //shadowOpacity: 0.8,
        elevation: 5,
        backgroundColor: colors.white,
        borderRadius: 4
    },
    overlay: {
        //flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        padding: 8
    },
    poster: {
        borderRadius: 4,
        width: 56,
        height: 100,
        resizeMode: 'cover'
    },
    containerText: {
        //maxHeight: 100,
        flex: 1,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        //backgroundColor: 'red'
    },
    title: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold',
        flex: 1,
        //backgroundColor: 'yellow'
    },
    description: {
        fontSize: 14,
        color: colors.gray,
        justifyContent: 'flex-end',
        //backgroundColor: 'blue'
    }
  });

export default styles;
