import './landing.scss';

import Accordion from './Accordion/Accordion';
import Feature from './Features/Feature';
import Footer from './Footer/Footer';
import Header from './Header/Header';

// ELements
import Button from '../../elements/Button/Button';

const Landing = () => {
  return (
    <div className='landing'>
      <header className='landing-header'>
        <div className='header-wrapper'>
          <div className='image-wrapper'>
            <img
              src={require('../../assets/images/misc/logo.png').default}
              alt=''
            />
          </div>
          <Button>Sign In</Button>
        </div>
      </header>
      <Accordion />
      <Feature />
      <Footer />
      <Header />
    </div>
  );
};

export default Landing;
