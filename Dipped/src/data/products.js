// src/data/products.js

export const products = [
  {
    id: 1,
    name: 'Cake Pops',
    description:
      'Moist, flavourful cake centres dipped in smooth Belgian chocolate and decorated to perfection. Perfect for parties, gifting, or just because.',
    images: [
        '/cake-pop1.jpeg',
        '/cake-pop2.jpeg',
        '/cake-pop3.jpeg',
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
      '/strawberriespng',
      '/strawberries1.jpg',
      '/strawberries2.jpeg',
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
      '/pretzels1.jpg',
      '/pretzels2.jpg',
      '/pretzels3.jpeg',
      '/pretzels.jpg',
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
      '/brownie1.jpeg',
      '/brownie2.jpg',
      '/brownie3.jpg',
      '/brownie.jpeg',
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
      '/rice-krispie.jpg',
      '/rice-krispie1.jpg',
      '/rice-krispie2.jpg',
      '/rice-krispie3.jpg',
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
      '/cupcakes.jpeg',
      '/cupcake1.jpeg',
      '/cupcake2.jpeg',
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