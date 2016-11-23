"use strict";

const flavors = [
  {
    'id': 'traditional',
    'name': 'Traditional',
    'description': 'Lorem ipsum dolor sit amet.',
    'status': 'available',
    'price': 'R$ 5',
    'image': 'traditional.jpg',
    'img': [
      {'default': 'traditional.jpg'},
      {'cover': 'traditional-cover.jpg'}
    ],
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'chocolate powder'
    ],
    'nutritionalInfo': [
      {'totalFat':'7g', 'DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'totalCabs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'brigadeiro',
    'name': 'Brigadeiro',
    'description': 'Lorem ipsum dolor sit amet.',
    'status': 'available',
    'price': 'R$ 6',
    'image': 'brigadeiro.jpg',
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'chocolate powder',
      'chocolate sprinkles'
    ],
    'nutritionalInfo': [
      {'totalFat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'totalCabs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'leite-ninho',
    'name': 'Leite Ninho',
    'description': 'Lorem ipsum dolor sit amet.',
    'status': 'unavailable',
    'price': 'R$ 6',
    'image': 'leite-ninho.jpg',
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      '"ninho" milk powder'
    ],
    'nutritionalInfo': [
      {'totalFat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'totalCabs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'oreo',
    'name': 'Oreo',
    'description': 'Lorem ipsum dolor sit amet.',
    'price': 'R$ 6',
    'status': 'coming-soon',
    'image': 'oreo.jpg',
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'chocolate powder',
      'oreo cookies'
    ],
    'nutritionalInfo': [
      {'totalFat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'totalCabs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'nutella',
    'name': 'Nutella',
    'description': 'Lorem ipsum dolor sit amet.',
    'status': 'available',
    'price': 'R$ 6',
    'image': 'nutella.jpg',
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'chocolate powder',
      'nutella'
    ],
    'nutritionalInfo': [
      {'totalFat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'totalCabs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'beijinho',
    'name': 'Beijinho',
    'description': 'Lorem ipsum dolor sit amet.',
    'status': 'available',
    'price': 'R$ 6',
    'image': 'beijinho.jpg',
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'coconut sprinkles',
      'coconut milk',
      'gillyflower',
      'count milk'
    ],
    'nutritionalInfo': [
      {'totalFat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'totalCabs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'doce-de-leite',
    'name': 'Doce de Leite',
    'description': 'Lorem ipsum dolor sit amet.',
    'status': 'available',
    'price': 'R$ 6',
    'image': 'doce-de-leite.jpg',
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'count milk',
      'milk caramel sauce'
    ],
    'nutritionalInfo': [
      {'totalFat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'totalCabs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'blondie-macadamia',
    'name': 'Blondie de Macadâmia',
    'description': 'Lorem ipsum dolor sit amet.',
    'status': 'available',
    'price': 'R$ 6',
    'image': 'blondie-macadamia.jpg',
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'count milk',
      'macadamia'
    ],
    'nutritionalInfo': [
      {'totalFat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'totalCabs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
];

export default flavors;
