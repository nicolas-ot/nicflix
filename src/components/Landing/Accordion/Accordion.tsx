import './accordion.scss';

const Accordion = () => {
  return (
    <div className='accordion landing-card'>
      <div className='accordion-background'>
        <div className='background-wrapper'>
          <div className='image-gradient'></div>
          <img
            alt='background'
            src={require('../../../assets/images/misc/background.jpg').default}
          ></img>
        </div>
      </div>
      <div className='accordion-text'>
        <h1 className='accordion-title'>
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className='accordion-subtitle'>Watch anywhere. Cancel anytime.</h2>
        <form className='accordion-form'>
          Ready to watch? Enter your email to create or restart your membership.
        </form>
      </div>
    </div>
  );
};

export default Accordion;
