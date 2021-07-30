import './feature.scss';

interface FeatureProps {
  title: string;
  desc: string;
  img: any;
  direction: 'left' | 'right';
  inlineStyle: {};
}

const Feature: React.FC<FeatureProps> = ({
  title,
  desc,
  img,
  direction,
  inlineStyle,
}) => {
  const cardContent =
    direction === 'left' ? (
      <>
        <div className='feature-text padding-right'>
          <h1 className='landing-title'>{title}</h1>
          <h2>{desc}</h2>
        </div>
        <div className='feature-img-container'>
          <div className='feature-animation-container' style={inlineStyle}>
            <img src={img} alt='feature' />
          </div>
        </div>
      </>
    ) : (
      <>
        <div className='feature-img-container padding-right'>
          <div className='feature-animation-container' style={inlineStyle}>
            <img src={img} alt='feature' />
          </div>
        </div>
        <div className='feature-text'>
          <h1>{title}</h1>
          <h2>{desc}</h2>
        </div>
      </>
    );

  return (
    <div className='landing-card'>
      <div className='feature-card-container'>{cardContent}</div>
    </div>
  );
};

export default Feature;
