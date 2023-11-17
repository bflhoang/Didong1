export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'clothesSale',
    productName: 'Áo hoodie ,áo mũ trùm đầu dài tay form rộng',
    productPrice: '500000',
    description:
      'Shop Brand: Y2K | Suất Xứ : Việt Nam | Chất Liệu: Nỉ Ngoại, không bị xù lông.',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/hodie/hd01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/hodie/hd01.jpg'),
      require('../database/images/hodie/hd02.jpg'),
      require('../database/images/hodie/hd03.jpg'),
    ],
  },
  {
    id: 2,
    category: 'clothesSale',
    productName: 'Áo hoodie form rộng WIND unisex nỉ bông ',
    productPrice: '400.000',
    description:
      'Shop Brand: Y2K | Suất Xứ : Việt Nam | Chất Liệu: Nỉ Ngoại, không bị xù lông.',
    isOff: false,
    productImage: require('../database/images/hodie/hdb01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/hodie/hdb01.jpg'),
      require('../database/images/hodie/hdb02.jpg'),
      require('../database/images/hodie/hdb03.jpg'),
    ],
  },
  {
    id: 3,
    category: 'clothesHot',
    productName: 'Áo Hoodie Form Boxy Nỉ Bông Logo Thêu Unisex Local Brand Y2K',
    productPrice: '359.000',
    description:
      'Shop Brand: Y2K | Suất Xứ : Việt Nam | Chất Liệu: Nỉ Ngoại, không bị xù lông.',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/hodie/hdy01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/hodie/hdy01.jpg'),
      require('../database/images/hodie/hdy01.jpg'),
      require('../database/images/hodie/hdy01.jpg'),
    ],
  },
  {
    id: 4,
    category: 'clothesHot',
    productName: 'Quần ống rộng Alkyne Parachute Pants Ver1',
    productPrice: '299.000',
    description:
      'Chất liệu: vải dù xi Nhật, chống thấm nhẹ, thoáng mát, thiết kế ống quần wide leg.',
    isOff: false,
    productImage: require('../database/images/Pant/pa01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/Pant/pa01.jpg'),
      require('../database/images/Pant/pa02.jpg'),
      require('../database/images/Pant/pa03.jpg'),
    ],
  },
  {
    id: 5,
    category: 'clothesHot',
    productName: 'Quần ống rộng Alkyne Parachute Pants Ver2',
    productPrice: '350.000',
    description:
      'Chất liệu: vải dù xi Nhật, chống thấm nhẹ, thoáng mát, thiết kế ống quần wide leg.',
    isOff: false,
    productImage: require('../database/images/Pant/pab01.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/Pant/pab01.jpg'),
      require('../database/images/Pant/pab02.jpg'),
      require('../database/images/Pant/pab03.jpg'),
    ],
  },
  {
    id: 6,
    category: 'clothesHot',
    productName: 'Quần cargo pants đen DINO TWENTY SINCE 2020 form unisex - K468',
    productPrice: '290.000',
    description:
      'Chất liệu: vải dù xi Nhật, chống thấm nhẹ, thoáng mát, thiết kế ống quần wide leg.',
    isOff: false,
    productImage: require('../database/images/Pant/pa01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/Pant/pa01.jpg'),
      require('../database/images/Pant/pa02.jpg'),
      require('../database/images/Pant/pa03.jpg'),
    ],
  },
  {
    id: 7,
    category: 'clothesHot',
    productName: 'Quần cargo pants trắng',
    productPrice: '420.000',
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../database/images/Pant/pa01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/Pant/pa01.jpg'),
      require('../database/images/Pant/pa02.jpg'),
      require('../database/images/Pant/pa03.jpg'),
    ],
  },
  {
    id: 8,
    category: 'clothesHot',
    productName: 'Áo baby tee nữ tay ngắn',
    productPrice: '220.000',
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../database/images/Pant/pa01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/Pant/pa01.jpg'),
      require('../database/images/Pant/pa02.jpg'),
      require('../database/images/Pant/pa03.jpg'),
    ],
  },
  {
    id: 9,
    category: 'clothesHot',
    productName: 'Áo Phông Rộng Tay Lỡ',
    productPrice: '380.000',
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../database/images/Pant/pa01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/Pant/pa01.jpg'),
      require('../database/images/Pant/pa02.jpg'),
      require('../database/images/Pant/pa03.jpg'),
    ],
  },
  {
    id: 10,
    category: 'clothesHot',
    productName: 'Áo thun nam nữ',
    productPrice: '320.000',
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../database/images/Pant/pa01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/Pant/pa01.jpg'),
      require('../database/images/Pant/pa02.jpg'),
      require('../database/images/Pant/pa03.jpg'),
    ],
  },
  {
    id: 11,
    category: 'clothesHot',
    productName: 'Áo khoác da thể thao LEATHER JACKET thời trang cá tính cao cấp',
    productPrice: '720.000',
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../database/images/Pant/pa01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/Pant/pa01.jpg'),
      require('../database/images/Pant/pa02.jpg'),
      require('../database/images/Pant/pa03.jpg'),
    ],
  },
  {
    id: 12,
    category: 'clothesHot',
    productName: 'Quần cargo pants đen',
    productPrice: '520.000',
    description:
      'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
    isOff: false,
    productImage: require('../database/images/Pant/pa01.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/Pant/pa01.jpg'),
      require('../database/images/Pant/pa02.jpg'),
      require('../database/images/Pant/pa03.jpg'),
    ],
  },
];