import { useEffect, useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';
import style from './Faq.module.scss';
import { faqs } from './faqs';
import axios from 'axios';

const Faq = () => {
  const [faqList, setFaqList] = useState([]);

  useEffect(() => {
    axios
      .get(`${window.spBaseUrl}/json/main/`)
      .then((response) => setFaqList(response.data.faq));
  }, []);

  return (
    <section className={style.faq}>
      <div className='container'>
        <div className={style.faq__title}>вопрос-ответ</div>
        <div className={style.faqBody}>
          {faqList.length > 1 &&
            faqList.map((faq, index) => (
              <Accordion key={index} faq={faq} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
