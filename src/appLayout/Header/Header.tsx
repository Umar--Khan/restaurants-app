import { useContext } from 'react';

import JustEatLogo from 'assets/logo-justeat.svg';
import UserIcon from 'assets/icons/user.svg';
import { UserContext } from 'context/userContext';
import NavLink from 'shared/NavLink/NavLink';

const Header = () => {
  const { firstName } = useContext(UserContext);

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__left'>
          <a href='/'>
            <img src={JustEatLogo} alt='Just Eat Takeaway' height='45px' />
          </a>
        </div>
        <div className='header__right'>
          {/* Would use a react router link for routing instead of an anchor link to avoid page refresh */}
          <ul className='header__links'>
            <li>
              <NavLink
                icon={UserIcon}
                alt={firstName}
                text={firstName}
                path='/'
              />
            </li>
            <li>
              <NavLink alt='Help' text='Help' path='/' />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
