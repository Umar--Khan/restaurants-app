import FlexContainer from 'shared/Containers/FlexContainer';
import TextLink from 'shared/TextLink/TextLink';
import { ReactComponent as BurgerIcon } from 'assets/icons/cuisines.svg';
import { cuisines } from 'service/__mocks__/cuisines';
import Card from 'shared/Card/Card';

const AllCuisines = () => (
  <div className='all-cuisines'>
    {/* Should be a seperate sub-component */}
    <FlexContainer className='all-cuisines__meta' spaceBetween>
      <p className='all-cuisines__meta__text'>
        <BurgerIcon />
        All Cuisines A-Z
      </p>
      <span>
        {/* This shouldn't be a anchor but rather a button */}
        <TextLink href='/'>Reset</TextLink>
      </span>
    </FlexContainer>
    <ul className='all-cuisines__list'>
      {/* Should also be a serperate sub-component */}
      {cuisines.map(cuisine => (
        <li key={cuisine.id} className='all-cuisines__list__cuisine'>
          <Card className='all-cuisines__list__cuisine__card'>
            {cuisine.name}
          </Card>
        </li>
      ))}
    </ul>
    <FlexContainer>
      {/* This shouldn't be a anchor but rather a button */}
      <TextLink href='/'>View more</TextLink>
    </FlexContainer>
  </div>
);

export default AllCuisines;
