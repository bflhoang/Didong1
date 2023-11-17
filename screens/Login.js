import React, { useState, useEffect } from 'react';
import {
    Alert,
    Text,
    Image,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { images, icons, colors, fontSize } from '../constants/index'
import Icon from'react-native-vector-icons/FontAwesome5'
import{isValidEmail, isValidPassword} from '../utilies/Validations'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function Login(props) {
    
    const[errorEmail, setErrorEmail] = useState('')
    const[errorPassword, setErrorPassword] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigation = useNavigation();

    const isValidationOK = () => email.length > 0 && password.length > 0
        && isValidEmail(email) == true
        && isValidPassword(password) == true

    const handleLogin = async () => {
        try {
            const response = await axios.get(
                `http://192.168.0.105:3000/users/?email=${email}&password=${password}`
            );
            if (email === "" || password === "") {
                Alert.alert('Thông báo', 'Chưa nhập tài khoản hoặc mật khẩu')
            } else {
                if (response.data.length > 0) {
                    await AsyncStorage.setItem('email', email);
                    Alert.alert('Thông báo', 'Đăng nhập thành công', [
                        {
                            text: 'OK',
                            onPress: () => {
                                navigation.navigate('Maintabs');
                            }
                        }
                    ]);
                } else {
                    Alert.alert('Thông báo', 'Đăng nhập thất bại');
                }
            }
        } catch (error) {
            if (error.response) {
                // Xử lý lỗi từ máy chủ (ví dụ: lỗi 404, 500, ...)
                console.error('Server error:', error.response.status);
                Alert.alert('Server Error', 'An error occurred on the server.');
            } else if (error.request) {
                // Xử lý lỗi mạng (ví dụ: không thể kết nối)
                console.error('Network error:', error.request);
                Alert.alert('Network Error', 'Unable to connect to the server.');
            } else {
                // Xử lý lỗi khác (ví dụ: lỗi cú pháp JSON)
                console.error('Error:', error.message);
                Alert.alert('Error', 'An error occurred.');
            }
        }
    }
                    
    return <KeyboardAvoidingView style={{
        flex: 100,
        backgroundColor: 'white',
    }}>
        <View style={{
            flex: 35,
            flexDirection: 'row',
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h1,
                fontWeight: 'bold',
                width: '50%',
                marginTop: 70,
                marginHorizontal: 20
            }}>Bạn đã sẵn sàng để tạo tài khoản?</Text>
        </View>
        <View style = {{
            flex: 25
        }}>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    fontSize: fontSize.h3,
                    color: 'black',
                    marginTop: 10,
                }}>Email:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorEmail(isValidEmail(text) == true ? 
                        '' : 'Email không đúng định dạng')
                        setEmail(text)
                    }}
                    style={{
                        color: 'black',
                        fontSize: fontSize.h4
                    }}
                    placeholder='example@gmail.com'
                    placeholderTextColor={colors.placehoder}
                />
                <View style={{
                    height: 1,
                    backgroundColor: 'black',
                    width: '100%',
                    marginBottom: 10,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }}/>
                <Text style = {{
                    color: 'red',
                    fontSize: 12,
                    marginBottom: 5
            }}>{errorEmail}</Text>
            </View>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    fontSize: fontSize.h3,
                    color: 'black',
                    marginTop: 10,
                }}>Mật khẩu:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? 
                        '' : 'Mật khẩu của bạn nhập phải hơn 3 kí tự')
                        setPassword(text)
                    }}
                    style={{
                        color: 'black',
                        fontSize: fontSize.h4
                    }}
                    secureTextEntry={true} // bảo mật mã code  
                    placeholder='Nhập mật khẩu của bạn'
                    placeholderTextColor={colors.placehoder}
                />
                <View style={{
                    height: 1,
                    backgroundColor: 'black',
                    width: '100%',
                    marginBottom: 15,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }}/>
                <Text style = {{
                    color: 'red',
                    fontSize: 12,
                    marginBottom: 5
            }}>{errorPassword}</Text>
            </View>
        </View>
        <View style = {{
            flex: 20
        }}>
        <TouchableOpacity 
        disabled={!isValidationOK}
        onPress={handleLogin}
        style={{
            backgroundColor: isValidationOK() == true ? 'black' : 'rgba(0,0,0,0.5)' ,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 40,
            marginTop: 5,
            borderRadius: 16
        }}>
            <Text style={{
                color: 'white',
                padding: 10,
                fontSize: fontSize.h4,
                
            }}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() =>{
            alert('Bạn đã ấn vào đăng kí')
        }}
        style={{padding: 5}}>
            <Text style={{
                padding: 8,
                fontSize: fontSize.h6,
                color: 'black',
                alignSelf: 'center'
            }}>Bạn là người mới? Đăng kí</Text>
        </TouchableOpacity>
        </View>
        <View style = {{
            flex: 20
        }}>
            <View style ={{
                height: 40,
                flexDirection:'row',
                alignItems: 'center',
                marginHorizontal: 20
            }}>
                <View style = {{height: 1, backgroundColor: 'black', flex: 1}}></View>
                <Text style={{
                padding: 8,
                fontSize: fontSize.h6,
                color: 'black',
                alignSelf: 'center',
                marginHorizontal: 5
            }}>Đăng nhập bằng tài khoản khác</Text>
            <View style = {{height: 1, backgroundColor: 'black', flex: 1}}></View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                
            }}>
                <Icon name='facebook' size={35} color={colors.facebook} />
                <View style = {{ width: 15}}/>
                <Icon name='google' size={35} color={colors.google} />
                <View style = {{ width: 15}}/>
                <Icon name='apple' size={35} color={colors.apple} />
                <View style = {{ width: 15}}/>
                <Icon name='instagram' size={35} color={colors.instagram} />
            </View>
        </View>
    </KeyboardAvoidingView>
}
export default Login