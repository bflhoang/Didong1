import {
    View,
    Text,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    FlatList,
  } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {COLORS, SIZES, FONTS, database} from '../database/theme'
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';

  const PhotosRoutes = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        // data={photos}
        numColumns={3}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              aspectRatio: 1,
              margin: 3,
            }}
          >
            <Image
              key={index}
              source={item}
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
            />
          </View>
        )}
      />
    </View>
  );
  
  const LikesRoutes = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
      }}
    />
  );
  
  const renderScene = SceneMap({
    first: PhotosRoutes,
    second: LikesRoutes,
  });
  
  const Profile = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
  
    const [routes] = useState([
      { key: "first", title: "Feedback" },
      { key: "second", title: "Sản phẩm yêu thích" },
    ]);
  
    const renderTabBar = (props) => (
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: COLORS.primary,
        }}
        style={{
          backgroundColor: COLORS.white,
          height: 44,
        }}
        renderLabel={({ focused, route }) => (
          <Text style={[{ color: focused ? COLORS.black : COLORS.gray }]}>
            {route.title}
          </Text>
        )}
      />
    );
    
    const navigation = useNavigation();
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{ width: "100%" }}>
          <Image
            source={{ uri: 'https://blog.webico.vn/wp-content/uploads/2018/07/anh-dang-facebook-2.png' }}
            resizeMode="cover"
            style={{
              height: 228,
              width: "100%",
            }}
          />
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
        </View>
  
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={{ uri:'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/387077478_1049489712754649_2223657600712750321_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_Lh1Tr7fcAIAX_hPjoV&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDyK7HVNLw3rozfn1fSo8pSaJKwi2v67uqIVIbhn3UAtw&oe=6551B354'
          }}
            resizeMode="contain"
            style={{
              height: 155,
              width: 155,
              borderRadius: 999,
              borderColor: COLORS.primary,
              borderWidth: 2,
              marginTop: -90,
            }}
          />
  
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.primary,
              marginVertical: 8,
            }}
          >
            Vũ Việt Hoàng
          </Text>
          <Text
            style={{
              color: COLORS.black,
              ...FONTS.body4,
            }}
          >
            Admin
          </Text>
  
          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
              alignItems: "center",
            }}
          >
            <MaterialIcons name="location-on" size={24} color="black" />
            <Text
              style={{
                ...FONTS.body4,
                marginLeft: 4,
              }}
            >
              Hà Nội, Việt Nam
            </Text>
          </View>
  
          <View
            style={{
              paddingVertical: 8,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: SIZES.padding,
              }}
            >
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.primary,
                }}
              >
                122
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.primary,
                }}
              >
                Người theo dõi
              </Text>
            </View>
  
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: SIZES.padding,
              }}
            >
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.primary,
                }}
              >
                67
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.primary,
                }}
              >
                Đang theo dõi
              </Text>
            </View>
  
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: SIZES.padding,
              }}
            >
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.primary,
                }}
              >
                77K
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.primary,
                }}
              >
                Lượt Thích
              </Text>
            </View>
          </View>
  
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 124,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
                borderRadius: 10,
                marginHorizontal: SIZES.padding * 2,
              }}
            >
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                Chỉnh sửa hồ sơ
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={{
                width: 124,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
                borderRadius: 10,
                marginHorizontal: SIZES.padding * 2,
              }}
            >
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                Thêm bạn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Profile;
  