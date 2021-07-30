import './accordion.scss';

interface FaqListProps {
  question: string;
  answer: string;
}

const FaqList: React.FC<FaqListProps> = ({ question }) => {
  return <div>{question}</div>;
};

const faq = [
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
];

const faqComponent = faq.map((faqList) => {
  return <FaqList question={faqList.question} answer={faqList.answer} />;
});

const Accordion = () => {
  return (
    <div className='accordion landing-card'>
      <div className='accordion-card-text'>
        <h1 className='landing-title'>Frequently Asked Questions</h1>
        <ul className='faq-list'>{faqComponent}</ul>
        <form action='GET' className='email-form'></form>
      </div>
    </div>
  );
};

export default Accordion;
