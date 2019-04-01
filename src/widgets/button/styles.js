import { StyleSheet } from 'react-native';
import * as colors from '../../commons/colors';

const styles = StyleSheet.create({
     button: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        backgroundColor: colors.primaryColor
     },
     label: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white
     }
});

export default styles;