import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import { images, icons, colors, fontSize } from '../../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Picker } from '@react-native-picker/picker';

function _getColorFromStatus(status) {
    if (status.toLowerCase().trim() == 'còn hàng') {
        return colors.success
    }
    else if (status.toLowerCase().trim() == 'tạm thời hết hàng') {
        return colors.sold
    }
    return colors.success
}
function ClothesItem(props) {
    let { name, 
        status, 
        type, 
        price,
        url, } = props.clothes
    const {onPress} = props
    return (<TouchableOpacity
        onPress={onPress}
        style={{
            height: 150,
            paddingTop: 40,
            paddingStart: 10,
            flexDirection: 'row'
        }}>
        <Image
            style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
                marginRight: 20
            }}
            source={{
                uri: url
            }} />
        <View style={{
            flex: 1,
            marginRight: 20
        }}>
            <Text style={{
                fontSize: fontSize.h6,
                fontWeight: 'bold'
            }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: 'black'
            }} />
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    fontSize: fontSize.h6,
                    color: '#838b8b'
                }}>Tình trạng: </Text>
                <Text style={{
                    fontSize: fontSize.h6,
                    color: _getColorFromStatus(status)
                }}>{status.toUpperCase()}</Text>
            </View>
            <Text style={{
                fontSize: fontSize.h6,
                fontWeight: 'bold'
            }}>Loại: {type}</Text>
            <Text style={{
                fontSize: fontSize.h6,
                fontWeight: 'bold'
            }}>Giá: {price}đ</Text>
        </View>
    </TouchableOpacity>)
}
export default ClothesItem