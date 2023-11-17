import React, {Component} from 'react'
import {
    TouchableOpacity,
    Text,
}from 'react-native'
import { colors } from '../constants'
function UIButton(props) {
    const {onPress, title, isSelected} = props
    return <TouchableOpacity
        onPress={onPress}
        style={{
            borderColor: 'black',
            borderWidth: 2, // độ dày của viền
            height: 45,
            borderRadius: 10, // bo cạnh của btn
            marginHorizontal: 20, // chiều trái phải
            marginVertical: 10, // chiều trên dưới
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected == true ?'white': null
        }}>
        <Text style={{
            color: isSelected == true ? colors.primary :'black',
            fontSize: 15,
            fontWeight: 'bold'
        }}>{title}</Text>
    </TouchableOpacity>
    
}
export default UIButton
