import { StyleSheet } from 'react-native';
import * as colors from '../../commons/colors';

const styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.black
    },
    overlay: {
        flexDirection: "row",
        alignItems: 'flex-end',
        padding: 8
    },
    container: {
        width: '100%',
        height: 240,
        justifyContent: 'flex-end'
    },
    poster: {
        width: 79,
        height: 140,
        marginRight: 8
    },
    backdrop: {
        flex:1,
        opacity: 0.8
    },
    title: {
        fontSize: 16,
        color: 'white',
        flex: 1,
        fontWeight: 'bold'
    },
    footer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    footerText: {
        fontSize: 16,
        color: colors.white,
        textAlign: 'center',
    }
  });

export default styles;