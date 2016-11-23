"use strict";

const flavors = [
  {
    'id': 'traditional',
    'name': 'Traditional',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, sit amet imperdiet nulla maximus id. Aenean ultrices leo a dolor elementum dictum.',
    'status': 'available',
    'price': 'R$ 5',
    'img': [
      'default': 'traditional.jpg',
      'cover': 'traditional-cover.jpg'
    ]
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'chocolate powder'
    ],
    'nutritional-info': [
      {'total-fat':'7g', 'DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'total-carbs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'brigadeiro',
    'name': 'Brigadeiro',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, sit amet imperdiet nulla maximus id. Aenean ultrices leo a dolor elementum dictum.',
    'status': 'available',
    'price': 'R$ 6',
    'img': [
      'default': 'brigadeiro.jpg',
      'cover': 'brigadeiro-cover.jpg'
    ]
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'chocolate powder',
      'chocolate sprinkles'
    ],
    'nutritional-info': [
      {'total-fat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'total-carbs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'leite-ninho',
    'name': 'Leite Ninho',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, sit amet imperdiet nulla maximus id. Aenean ultrices leo a dolor elementum dictum.',
    'status': 'unavailable',
    'price': 'R$ 6',
    'img': [
      'default': 'leite-ninho.jpg',
      'cover': 'leite-ninho-cover.jpg'
    ]
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      '"ninho" milk powder'
    ],
    'nutritional-info': [
      {'total-fat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'total-carbs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'oreo',
    'name': 'Oreo'
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, sit amet imperdiet nulla maximus id. Aenean ultrices leo a dolor elementum dictum.',
    'price': 'R$ 6',
    'status': 'coming-soon',
    'img': [
      'default': 'oreo.jpg',
      'cover': 'oreo-cover.jpg'
    ]
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'chocolate powder',
      'oreo cookies'
    ],
    'nutritional-info': [
      {'total-fat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'total-carbs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'nutella',
    'name': 'Nutella',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, sit amet imperdiet nulla maximus id. Aenean ultrices leo a dolor elementum dictum.',
    'status': 'available',
    'price': 'R$ 6',
    'img': [
      'default': 'nutella.jpg',
      'cover': 'nutella-cover.jpg'
    ]
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'chocolate powder',
      'nutella'
    ],
    'nutritional-info': [
      {'total-fat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'total-carbs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'beijinho',
    'name': 'Beijinho',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, sit amet imperdiet nulla maximus id. Aenean ultrices leo a dolor elementum dictum.',
    'status': 'available',
    'price': 'R$ 6',
    'img': [
      'default': 'oreo.jpg',
      'cover': 'oreo-cover.jpg'
    ]
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
    'nutritional-info': [
      {'total-fat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'total-carbs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'doce-de-leite',
    'name': 'Doce de Leite',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, sit amet imperdiet nulla maximus id. Aenean ultrices leo a dolor elementum dictum.',
    'status': 'available',
    'price': 'R$ 6',
    'img': [
      'default': 'doce-de-leite.jpg',
      'cover': 'doce-de-leite-cover.jpg'
    ]
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'count milk',
      'milk caramel sauce'
    ],
    'nutritional-info': [
      {'total-fat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'total-carbs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
  {
    'id': 'blondie-macadamia',
    'name': 'Blondie de Macadâmia',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor nisi metus, sit amet imperdiet nulla maximus id. Aenean ultrices leo a dolor elementum dictum.',
    'status': 'available',
    'price': 'R$ 6',
    'img': [
      'default': 'blondie-macadamia.jpg',
      'cover': 'blondie-macadamia-cover.jpg'
    ]
    'ingredients': [
      'sugar',
      'milk chocolate',
      'wheat flour',
      'egg',
      'butter with salt',
      'count milk',
      'macadamia'
    ],
    'nutritional-info': [
      {'total-fat':'7g','DV':'11%'},
      {'cholesterol':'18mg','DV':'6%'},
      {'sodium':'82mg','DV':'3%'},
      {'total-carbs':'12g','DV':'4%'},
      {'protein':'1.5g'},
      {'calcium':'13.7g'},
      {'potassium':'42.2g'}
    ]
  },
];

export default flavors;
