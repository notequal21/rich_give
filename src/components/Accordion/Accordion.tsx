import style from './Accordion.module.scss';
import { useRef, useState } from 'react';
import { arrowSvg } from './assets/arrowSvg';

const Accordion = ({ faq, index }: any) => {
  const { question, answer } = faq;
  const contentEl: any = useRef(null);
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className={`${style.accordion} ${clicked && style.active}`}>
      <button onClick={handleToggle} className={style.accordion__btn}>
        <span className={style.accordion__num}>{index + 1}</span>
        <p dangerouslySetInnerHTML={{ __html: `${question}` }}></p>
        <span className={style.accordion__arrow}>{arrowSvg}</span>
      </button>
      <div
        ref={contentEl}
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
        className={style.accordion__content}
      >
        <div
          className={style.accordion__answer}
          dangerouslySetInnerHTML={{ __html: `${answer}` }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
