import { sanitizeString } from 'utils/sanitizeString';

export type Restaurant = {
  name: string;
  id: number;
};

export const restaurants: Restaurant[] = [
  {
    name: "Rosa's Thai Cafe",
    id: 1,
  },
  {
    name: 'Dennis Kebab',
    id: 2,
  },
  {
    name: 'Subway',
    id: 3,
  },
  {
    name: 'Bella Italia',
    id: 4,
  },
  {
    name: 'Intoku Pan Asian & Sushi Cafe',
    id: 5,
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
