import './accordion.scss';

const Accordion = () => {
  return (
    <div className='accordion'>
      <div className='accordion-background'>
        <div className='background-wrapper'>
          <img
            alt='background'
            src={require('../../../assets/images/misc/background.jpg').default}
          ></img>
        </div>
      </div>
      <div>accordion</div>
    </div>
  );
};

export default Accordion;
