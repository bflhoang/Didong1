import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { images, icons, colors, fontSize } from '../../constants'
import Icon from'react-native-vector-icons/FontAwesome5'
import{isValidEmail, isValidPassword} from '../../utilies/Validations'

function Register(props){
    //
    const[errorEmail, setErrorEmail] = useState('')
    const[errorPassword, setErrorPassword] = useState('')
    //state to store em/pas
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const isValidationOK = () => email.length > 0 && password.length > 0 
                        && isValidEmail(email) == true
                        && isValidPassword(password) == true
    return <KeyboardAvoidingView style={{
        flex: 100,
        backgroundColor: 'white',
    }}>
        <View style={{
            flex: 25,
            flexDirection: 'row',
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h1,
                fontWeight: 'bold',
                width: '50%',
                marginTop: 70,
                marginHorizontal: 20
            }}>Chào mừng bạn đến với Y2K</Text>
        </View>
        <View style = {{
            flex: 55,
            backgroundColor: '#333333',
            padding: 10,
            margin: 10,
            borderRadius: 20
        }}>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    fontSize: fontSize.h3,
                    color: 'white',
                    marginTop: 10,
                }}>Tên người dùng:</Text>
                <TextInput
                    style={{
                        color: 'white',
                        fontSize: fontSize.h4
                    }}
                    placeholderTextColor={'white'}
                />
                <View style={{
                    height: 1,
                    backgroundColor: 'white',
                    width: '100%',
                    marginBottom: 10,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }}/>
            </View>
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    fontSize: fontSize.h3,
                    color: 'white',
                    marginTop: 10,
                }}>Email:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorEmail(isValidEmail(text) == true ? 
                        '' : 'Email không đúng định dạng')
                        setEmail(text)
                    }}
                    style={{
                        color: 'white',
                        fontSize: fontSize.h4
                    }}
                    placeholder='example@gmail.com'
                    placeholderTextColor={'#bebebe'}
                />
                <View style={{
                    height: 1,
                    backgroundColor: 'white',
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
                    color: 'white',
                    marginTop: 10,
                }}>Mật khẩu:</Text>
                <TextInput
                    onChangeText={(text) => {
                        // if(isValidPassword(text) == false){
                        //     setErrorPassword('Mật khẩu của bạn nhập phải hơn ba kí tự')
                        // } else{
                        //     setPassword('')
                        // }
                        setErrorPassword(isValidPassword(text) == true ? 
                        '' : 'Mật khẩu của bạn nhập phải hơn 3 kí tự')
                        setPassword(text)
                    }}
                    style={{
                        color: 'white',
                        fontSize: fontSize.h4
                    }}
                    secureTextEntry={true} // bảo mật mã code  
                    placeholder='Nhập mật khẩu của bạn'
                    placeholderTextColor={'#bebebe'}
                />
                <View style={{
                    height: 1,
                    backgroundColor: 'white',
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
            <View style={{
                marginHorizontal: 15
            }}>
                <Text style={{
                    fontSize: fontSize.h3,
                    color: 'white',
                    marginTop: 10,
                }}>Mật lại khẩu:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? 
                        '' : 'Mật khẩu của bạn nhập phải hơn 3 kí tự')
                        setPassword(text)
                    }}
                    style={{
                        color: 'white',
                        fontSize: fontSize.h4
                    }}
                    secureTextEntry={true} 
                    placeholder='Nhập lại mật khẩu của bạn'
                    placeholderTextColor={'#bebebe'}
                />
                <View style={{
                    height: 1,
                    backgroundColor: 'white',
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
            <TouchableOpacity 
        disabled = {isValidationOK() == false }
        onPress={() =>{
            alert(`Email = ${email}, password = ${password}`)
        }}
        style={{
            backgroundColor: isValidationOK() == true ? 'red' : 'white' ,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 40,
            marginTop: 5,
            borderRadius: 16
        }}>
            <Text style={{
                color: 'black',
                padding: 10,
                fontSize: fontSize.h4,
                fontWeight:'bold'
            }}>Đăng kí</Text>
        </TouchableOpacity>
            </View>
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
export default Register