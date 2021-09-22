import { Restaurant } from 'service/__mocks__/restaurants';
import Card from 'shared/Card/Card';

import OfferIcon from 'assets/icons/offers.svg';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

// Would spend more time to adding the rest of the details from the card

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => (
  <Card className='restaurant-card'>
    <a className='restaurant-card__link' href={restaurant.slug}>
      <div className='restaurant-card__thumbnail'>
        <img src={restaurant.thumbnail} alt={restaurant.name} />
        <div className='restaurant-card__logo'>
          <img src={restaurant.logo} alt={restaurant.name} />
        </div>
      </div>
      <div className='restaurant-card__details'>
        <h2>{restaurant.name}</h2>
        {restaurant.categories.map(category => (
          <span key={category}>{category} </span>
        ))}
      </div>
      <div className='restaurant-card__info'>
        {restaurant.promotion && (
          <div className='restaurant-card__info__promotion'>
            <img src={OfferIcon} alt={restaurant.promotion} />
            <p>{restaurant.promotion}</p>
          </div>
        )}
      </div>
    </a>
  </Card>
);

export default RestaurantCard;
