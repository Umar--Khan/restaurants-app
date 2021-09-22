import { sanitizeString } from 'utils/sanitizeString';

export type Restaurant = {
  name: string;
  id: number;
  thumbnail: string;
  logo: string;
  categories: string[];
  freeDelivery: boolean;
  minOrder: string;
  distance: string;
  sponsored: boolean;
  slug: string;
  promotion: string;
};

export const restaurants: Restaurant[] = [
  {
    name: "Rosa's Thai Cafe",
    id: 1,
    thumbnail:
      'https://raw.githubusercontent.com/justeat/JustEat.Recruitment.UI/master/assets/restaurant-images/thai.png',
    logo: 'https://raw.githubusercontent.com/justeat/JustEat.Recruitment.UI/master/assets/restaurant-images/logo-rosas.png',
    categories: ['Thai', 'Asian'],
    freeDelivery: true,
    minOrder: '£10',
    distance: '1.2 miles',
    sponsored: true,
    promotion: '20% off when you spend £20',
    slug: 'rosa-thai-cafe',
  },
  {
    name: 'Dennis Kebab',
    id: 2,
    thumbnail:
      'https://raw.githubusercontent.com/justeat/JustEat.Recruitment.UI/master/assets/restaurant-images/kebab.png',
    logo: 'https://raw.githubusercontent.com/justeat/JustEat.Recruitment.UI/master/assets/restaurant-images/logo-dennis-kebab.png',
    categories: ['Kebab', 'Pizza'],
    freeDelivery: true,
    minOrder: '£10',
    distance: '1.2 miles',
    sponsored: true,
    promotion: '20% off when you spend £20',
    slug: 'dennis-kebab',
  },
  {
    name: 'Subway',
    id: 3,
    thumbnail:
      'https://raw.githubusercontent.com/justeat/JustEat.Recruitment.UI/master/assets/restaurant-images/sandwich.png',
    logo: 'https://raw.githubusercontent.com/justeat/JustEat.Recruitment.UI/master/assets/restaurant-images/logo-subway.png',
    categories: ['Sandwiches', 'American'],
    freeDelivery: true,
    minOrder: '£10',
    distance: '1.2 miles',
    sponsored: true,
    promotion: '',
    slug: 'subway',
  },
  {
    name: 'Bella Italia',
    id: 4,
    thumbnail:
      'https://raw.githubusercontent.com/justeat/JustEat.Recruitment.UI/master/assets/restaurant-images/pizza.png',
    logo: 'https://raw.githubusercontent.com/justeat/JustEat.Recruitment.UI/master/assets/restaurant-images/logo-bellas.png',
    categories: ['Italian', 'Pizza'],
    freeDelivery: true,
    minOrder: '£10',
    distance: '1.2 miles',
    sponsored: true,
    promotion: '',
    slug: 'bella-italia',
  },
];

export const getRestaurants = (searchTerm: string) =>
  restaurants.filter(restaurant => {
    const sanitizedRestaurantName = sanitizeString(restaurant.name);
    const sanitizedPayload = sanitizeString(searchTerm);

    return (
      sanitizedRestaurantName
        .split(' ')
        .some(val => sanitizedPayload.split(' ').includes(val)) ||
      sanitizedRestaurantName.includes(sanitizedPayload)
    );
  });
