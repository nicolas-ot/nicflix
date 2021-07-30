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
    inlineStyle: { margin: '-10% -5% -5% 0' },
  },
  {
    title: 'Download your shows to watch offline.',
    desc: 'Save your favorites easily and always have something to watch.',
    img: require('../../../assets/images/feature/mobile.jpg').default,
    inlineStyle: { margin: '-8% 0 -4% -15%', width: '100%' },
  },
  {
    title: 'Watch everywhere.',
    desc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more..',
    img: require('../../../assets/images/feature/imac.jpg').default,
    inlineStyle: { margin: '-5% -10% 0 0' },
  },
  {
    title: 'Create profiles for kids.',
    desc: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    img: require('../../../assets/images/feature/kids-profile.png').default,
    inlineStyle: {},
  },
];

let id = 0;
const featuresCards = features.map((feature) => {
  id++;
  return (
    <Feature
      key={id}
      direction={id % 2 === 1 ? 'left' : 'right'}
      title={feature.title}
      desc={feature.desc}
      img={feature.img}
      inlineStyle={feature.inlineStyle}
    />
  );
});

const Features = () => {
  return <div className='features'>{featuresCards}</div>;
};

export default Features;
