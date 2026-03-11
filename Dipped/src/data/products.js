// src/data/products.js

export const products = [
  {
    id: 1,
    name: 'Cake Pops',
    description:
      'Moist, flavourful cake centres dipped in smooth Belgian chocolate and decorated to perfection. Perfect for parties, gifting, or just because.',
    images: [
        '/cake-pops/cake-pop1.jpg',
        '/cake-pops/cake-pop2.jpg',
        '/cake-pops/cake-pop3.jpg',
    ],
    priceFrom: 25,
    priceUnit: 'pop',
    featured: true,
    options: {
      flavours: ['Vanilla', 'Red Velvet', 'Chocolate', 'Lemon'],
      coatings: ['White Choc', 'Milk Choc', 'Dark Choc', 'Pink'],
      toppings: ['Sprinkles', 'Edible Pearls', 'Drizzle', 'Shimmer'],
    },
  },
  {
    id: 2,
    name: 'Dipped Strawberries',
    description:
      'Fresh strawberries hand-dipped in Belgian chocolate and decorated with your choice of toppings.',
    images: [
      '/strawberries/strawberries.png',
      '/strawberries/strawberries1.jpg',
      '/strawberries/strawberries2.jpeg',
    ],
    priceFrom: 18,
    priceUnit: 'each',
    featured: false,
    options: {
      coatings: ['White Choc', 'Milk Choc', 'Dark Choc', 'Pink'],
      toppings: ['Sprinkles', 'Edible Glitter', 'Pearl Beads', 'Gold Dust'],
    },
  },
  {
    id: 3,
    name: 'Dipped Pretzels',
    description:
      'The perfect sweet-salty combo — crispy pretzels dipped in rich chocolate and finished with beautiful toppings.',
    images: [
      '/pretzels/pretzel1.jpg',
      '/pretzels/pretzel2.jpg',
      '/pretzels/pretzel3.jpeg',
      '/pretzels/pretzels.jpg',
    ],
    priceFrom: 12,
    priceUnit: 'each',
    featured: false,
    options: {
      coatings: ['White Choc', 'Milk Choc', 'Dark Choc', 'Pink'],
      toppings: ['Sprinkles', 'Crushed Oreo', 'Pearl Beads', 'Drizzle'],
    },
  },
  {
    id: 4,
    name: 'Brownies',
    description:
      'Rich, fudgy brownies dipped and decorated — a crowd favourite for treat boxes and events.',
    images: [
      '/brownies/brownies1.jpeg',
      '/brownies/brownies2.jpg',
      '/brownies/brownies3.jpg',
      '/brownies/brownies.jpeg',
    ],
    priceFrom: 20,
    priceUnit: 'each',
    featured: false,
    options: {
      coatings: ['White Choc', 'Milk Choc', 'Dark Choc'],
      toppings: ['Sprinkles', 'Gold Dust', 'Crushed Oreo', 'Drizzle'],
    },
  },
  {
    id: 5,
    name: 'Rice Krispie Treats',
    description:
      'Light and crispy rice krispie squares dipped in chocolate and customised to match any theme or colour palette.',
    images: [
      '/rice-krispies/rice-krispie.jpg',
      '/rice-krispies/ricekrispie1.jpg',
      '/rice-krispies/ricekrispie2.jpg',
      '/rice-krispies/ricekrispie3.jpg',
    ],
    priceFrom: 15,
    priceUnit: 'each',
    featured: false,
    options: {
      coatings: ['White Choc', 'Milk Choc', 'Pink', 'Baby Blue'],
      toppings: ['Sprinkles', 'Edible Glitter', 'Pearl Beads', 'Shimmer'],
    },
  },
  {
    id: 6,
    name: 'Cupcakes',
    description:
      'Fluffy cupcakes topped with silky buttercream and decorated to match your theme — a showstopper at any event.',
    images: [
      '/cupcakes/cupcakes.jpeg',
      '/cupcakes/cupcake1.jpeg',
      '/cupcakes/cupcake2.jpg',
    ],
    priceFrom: 22,
    priceUnit: 'each',
    featured: false,
    options: {
      flavours: ['Vanilla', 'Red Velvet', 'Chocolate', 'Lemon'],
      toppings: ['Sprinkles', 'Edible Pearls', 'Edible Flowers', 'Shimmer'],
    },
  },
]

export const coatingColours = [
  { label: 'Blush Pink',     hex: '#F2C4CE' },
  { label: 'White',          hex: '#FFFFFF' },
  { label: 'Dark Chocolate', hex: '#3D1F22' },
  { label: 'Milk Chocolate', hex: '#C9956B' },
  { label: 'Mint',           hex: '#B5E5C5' },
  { label: 'Baby Blue',      hex: '#B8D4F0' },
  { label: 'Gold',           hex: '#F5D76E' },
  { label: 'Lilac',          hex: '#D4AFCC' },
]

export const occasions = [
  'Birthday',
  'Wedding',
  'Baby Shower',
  'Corporate',
  'Just Because 🎀',
  'Other',
]