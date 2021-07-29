import './feature.scss';

interface FeatureProps {
  title: string;
  desc: string;
  img: any;
}

const Feature: React.FC<FeatureProps> = ({ title, desc, img }) => {
  return (
    <div className='feature-card landing-card'>
      <div className='feature-card-container'>
        <div className='feature-text'>
          <h1>{title}</h1>
          <h2>{desc}</h2>
        </div>
        <div className='feature-img'>
          <img src={img} alt='feature' />
        </div>
      </div>
    </div>
  );
};

export default Feature;
