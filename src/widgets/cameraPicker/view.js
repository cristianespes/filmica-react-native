import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { CAMERA_OPTIONS } from '../../config/camera';

import styles from './styles';

class CameraPicker extends Component {
    render() {
        const { value, label, containerStyle, labelStyle, imageStyle} = this.props;
        const source = value ? { uri : value.uri } : null;
         return (
            <TouchableOpacity
                style={[styles.container, containerStyle]}
                onPress={this._showImagePicker}
            >
                <Image style={[styles.image, imageStyle]} source={source} />
                <View style={[styles.labelContainer, source ? {} : { backgroundColor: 'transparent'}]}>
                    <Text style={[styles.label, labelStyle]}>{label.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _showImagePicker = () => {
        ImagePicker.showImagePicker(CAMERA_OPTIONS, (response) => {
            if (response.uri) {
              this.props.onChange(response);
            }
          });
    }

}

CameraPicker.defaultProps = {
    value: null,
    onChange: () => {},
    label: 'Seleccionar imagen',
    containerStyle: {},
    labelStyle: {},
    imageStyle: {}
}

export default CameraPicker;
