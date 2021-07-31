import { useState } from 'react';
import './accordion.scss';

import EmailForm from '../../../elements/EmailForm/EmailForm';

interface FaqListProps {
  question: string;
  answer: string;
  onClick: (key: string) => void;
  opened: boolean;
  id: string;
}

const FaqList: React.FC<FaqListProps> = ({
  question,
  answer,
  id,
  onClick,
  opened,
}) => {
  return (
    <>
      <button className='faq-question' onClick={() => onClick(id)}>
        {question}
        <svg
          id='thin-x'
          viewBox='0 0 26 26'
          className={
            'svg-icon svg-icon-thin-x ' + (opened ? 'svg-open' : 'svg-closed')
          }
          focusable='true'
        >
          <path d='M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z'></path>
        </svg>
      </button>
      <div className={'faq-answer ' + (opened ? 'open' : 'closed')}>
        <span>{answer}</span>
      </div>
    </>
  );
};

const faq = [
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    id: '1',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    id: '2',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    id: '3',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    id: '4',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    id: '5',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    id: '6',
  },
];

const Accordion = () => {
  const [openedQuestion, setOpenedQuestion] = useState('');

  const openQuestion = (id: string) => {
    if (id === openedQuestion) setOpenedQuestion('');
    else setOpenedQuestion(id);
  };
  console.log(openedQuestion, ' tes');

  const faqComponent = faq.map((faqList) => {
    return (
      <li className='faq-list-item' key={faqList.id}>
        <FaqList
          onClick={(id) => openQuestion(id)}
          question={faqList.question}
          answer={faqList.answer}
          opened={openedQuestion === faqList.id}
          id={faqList.id}
        />
      </li>
    );
  });

  return (
    <div className='accordion landing-card'>
      <div className='accordion-card-text'>
        <h1 className='landing-title'>Frequently Asked Questions</h1>
        <ul className='faq-list'>{faqComponent}</ul>
        <EmailForm />
      </div>
    </div>
  );
};

export default Accordion;
