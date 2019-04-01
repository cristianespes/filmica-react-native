import { StyleSheet } from 'react-native';
import * as colors from '../../commons/colors';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    label: {
        color: colors.white,
        fontSize: 14,
        marginBottom: 8,
    },
    input: {
        color: colors.white,
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.white,
        padding: 10
    },
    error: {
        color: colors.error,
        fontSize: 12,
        marginTop: 8,
        textAlign: 'right',
        opacity: 0.8
    }
  });

export default styles;
