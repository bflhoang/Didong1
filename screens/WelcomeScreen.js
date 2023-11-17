import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { sum2Number, substract2Number, PI } from '../utilies/Calculation'
import { images, icons, colors, fontSize } from '../constants/index'
import { UIButton } from '../components'

function WelcomeScreen(props) {
    // state when state changed so UI reloaded
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Dùng ngay',
            isSelected: true,
        },
        {
            name: 'Đăng nhập',
            isSelected: false,
        },
        {
            name: 'Đăng kí',
            isSelected: false,
        },
    ])
    return <View style={
        {
            backgroundColor: 'white',
            flex: 100
        }
    }>
        <ImageBackground
            source={
                images.background
            }
            resizeMode='cover'
            style={{
                flex: 100
            }}
        >
            <View style={
                {
                    flex: 20,

                }}>
                <View style={{
                    flexDirection: 'row',
                    height: 120,
                    justifyContent: 'flex-start', // bố trí từ trái qua
                    alignItems: 'center' // căn giữa
                }}>
                    <Image
                        source={
                            icons.clothes
                        }
                        style={
                            {
                                width: 45,
                                height: 45,
                                marginHorizontal: 10,
                            }
                        }
                    />
                    <Text style={
                        {
                            color: 'black',
                            fontSize: fontSize.h4
                            
                        }
                    }>Shop Y2K</Text>
                    <View style={{ flex: 1 }} />
                    <Image
                        source={
                            icons.question
                        }
                        style={
                            {
                                width: 30,
                                height: 30,
                                marginEnd: 20
                            }
                        }
                    />
                </View>
            </View>
            <View style={{
                flex: 20,
                // backgroundColor: 'black',
                justifyContent: 'center', // bố trí từ trên xuống dưới
                alignItems: 'center'
            }}>
                <Text style={{
                    marginBottom: 10,
                    color: 'black',
                    fontSize: fontSize.h3
                }}>Chào mừng bạn đến với</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: fontSize.h1
                }}>Shop Y2K</Text>
                <Text style={{
                    marginBottom: 10,
                    color: 'black',
                    fontSize: fontSize.h3,
                    textAlign: 'center'
                }}>Vui lòng chọn tài khoản mà bạn muốn</Text>
            </View>
            <View style={{
                flex: 40,
                //backgroundColor: 'pink'
            }}>
                {accountTypes.map(accountType =>
                    <UIButton onPress={() => {
                        let newAccountTypes = accountTypes.map(eachAccountType => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        })
                        setAccountTypes(newAccountTypes);
                    }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    />)}
            </View>

            <View style={{
                flex: 20,
            }}>
                <UIButton title={'Đăng nhập'.toUpperCase()} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSize.h3,
                    alignSelf: 'center'
                }}>Bạn chưa có tài khoản?</Text>
                <TouchableOpacity
                onPress={()=>{
                    alert('Bạn có muốn đăng kí?')
                }}
                style = {{
                    padding: 5
                }}>
                    <Text style={{
                        color: colors.primary,
                        fontSize: fontSize.h3,
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}>Đăng kí</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}
export default WelcomeScreen

//     </View> // Co tu 2 the tro len thi cho vao the View

