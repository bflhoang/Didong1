import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
import * as Font from 'expo-font';

export const COLORS = {
    primary: '#242760',
    secondary: '#544C4C',
    white: '#FFFFFF',
    black: '#000000',
    gray: 'rgba(36, 39, 96, 0.05)',
    secondaryGray: 'rgba(84, 76, 76, 0.14)'
}

export const SIZES = {
    // global SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    padding3: 16,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 20,
    h3: 18,
    h4: 16,
    body1: 30,
    body2: 20,
    body3: 18,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
}

export const FONTS = {
    largeTitle: {
        fontFamily: 'black',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },
    h1: { fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 20 },
}

const appTheme = { COLORS, SIZES, FONTS }

export const imagesDataURL = [
    'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/387077478_1049489712754649_2223657600712750321_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_Lh1Tr7fcAIAX_hPjoV&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDyK7HVNLw3rozfn1fSo8pSaJKwi2v67uqIVIbhn3UAtw&oe=6551B354'
]

export default appTheme
