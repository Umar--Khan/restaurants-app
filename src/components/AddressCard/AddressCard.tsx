import TextLink from 'shared/TextLink/TextLink';
import Card from 'shared/Card/Card';

import { ReactComponent as MapPin } from 'assets/icons/map-pin.svg';

const AddressCard = () => (
  <Card className='address-card'>
    <span className='address-card__icon'>
      <MapPin />
    </span>
    <div className='address-card__text'>
      {/* TODO: Use address details from context api user details */}
      <p>BS8 4ES, Leigh woods</p>
      <TextLink href='/'>Change location</TextLink>
    </div>
  </Card>
);

export default AddressCard;
