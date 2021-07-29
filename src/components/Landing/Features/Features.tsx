import './features.scss';

import Feature from './Feature/Feature';

interface FeaturesProps {
  children: string;
}

const features = [
  {
    title: 'Enjoy on your TV.',
    desc: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    img: require('../../../assets/images/feature/tv.jpg').default,
  },
  {
    title: 'Download your shows to watch offline.',
    desc: 'Save your favorites easily and always have something to watch.',
    img: require('../../../assets/images/feature/tv.jpg').default,
  },
  {
    title: 'Watch everywhere.',
    desc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more..',
    img: require('../../../assets/images/feature/tv.jpg').default,
  },
  {
    title: 'Create profiles for kids.',
    desc: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    img: require('../../../assets/images/feature/tv.jpg').default,
  },
];

const featuresCards = features.map((feature) => {
  return (
    <Feature title={feature.title} desc={feature.desc} img={feature.img} />
  );
});

const Features = () => {
  return <div className='features'>{featuresCards}</div>;
};

export default Features;
