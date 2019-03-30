import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
     cell: {
        width: '50%',
        height: width / 1.4,
        backgroundColor: 'red'
     },
     image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
     }
});

export default styles;