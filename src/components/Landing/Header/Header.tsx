import './header.scss';

import EmailForm from '../../../elements/EmailForm/EmailForm';

const Header = () => {
  return (
    <div className='header landing-card'>
      <div className='header-background'>
        <div className='background-wrapper'>
          <div className='image-gradient'></div>
          <img
            alt='background'
            src={require('../../../assets/images/misc/background.jpg').default}
          ></img>
        </div>
      </div>
      <div className='header-text'>
        <h1 className='header-title landing-title'>
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className='header-subtitle'>Watch anywhere. Cancel anytime.</h2>
        <EmailForm />
      </div>
    </div>
  );
};

export default Header;
