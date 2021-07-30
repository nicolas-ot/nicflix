import './landing.scss';

import Header from './Header/Header';
import Features from './Features/Features';
import Footer from './Footer/Footer';
import Accordion from './Accordion/Accordion';

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
      <Header />
      <Features />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Landing;
