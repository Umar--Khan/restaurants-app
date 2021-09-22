import { useContext } from 'react';

import TextLink from 'shared/TextLink/TextLink';
import Card from 'shared/Card/Card';
import { UserContext } from 'context/userContext';

import { ReactComponent as MapPin } from 'assets/icons/map-pin.svg';

const AddressCard = () => {
  const { location } = useContext(UserContext);

  return (
    <Card className='address-card'>
      <span className='address-card__icon'>
        <MapPin />
      </span>
      <div className='address-card__text'>
        <p>{`${location.postcode}, ${location.firstLine}`}</p>
        <TextLink href='/'>Change location</TextLink>
      </div>
    </Card>
  );
};

export default AddressCard;
