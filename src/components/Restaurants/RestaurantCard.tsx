import { Restaurant } from 'service/__mocks__/restaurants';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => (
  <li key={restaurant.id}>{restaurant.name}</li>
);

export default RestaurantCard;
